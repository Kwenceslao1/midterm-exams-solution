// Import modules
const express = require('express');
const { Sequelize, DataTypes } = require('sequelize');

// Create an Express app
const app = express();

// Sequelize to connect to database
const sequelize = new Sequelize('database_name', 'username', 'password', {
    host: 'localhost',
    dialect: 'mysql',
});

//User model
const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    status: {
        type: DataTypes.STRING,
        defaultValue: 'active', // Default status
    },
}, {
    tableName: 'users', // Define the table name
    timestamps: false, 
});

// route to fetch all users
app.get('/users', async (req, res) => {
    try {
        const users = await User.findAll(); // Fetch all users to database
        res.json(users); // Send the users as a JSON response
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Sync the model with the database and start the server
sequelize.sync()
    .then(() => {
        console.log('Database synced');
        app.listen(3000, () => {
            console.log('Server is running on http://localhost:3000');
        });
    })
    .catch((error) => {
        console.error('Error syncing database:', error);
    });