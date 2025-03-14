const express = require('express');

const app = express();

app.get('/test', (req, res) => {
    res.json({ message: 'Express is working! Kent S. Wenceslao' });
});

//listen on port 3000
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});