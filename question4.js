let tasks = [];
let nextId = 1; 

// Create 
function addTask(name, description) {
    const task = {
        id: nextId++,
        name: name,
        description: description
    };
    tasks.push(task);
    return task;
}

// Read all 
function getAllTasks() {
    return tasks;
}

// Update 
function updateTask(id, updatedName, updatedDescription) {
    const task = tasks.find(task => task.id === id);
    if (task) {
        task.name = updatedName;
        task.description = updatedDescription;
        return task;
    }
    return null; // Task not found
}

// Delete 
function deleteTask(id) {
    const taskIndex = tasks.findIndex(task => task.id === id);
    if (taskIndex !== -1) {
        tasks.splice(taskIndex, 1);
        return true; // Task deleted
    }
    return false; // Task not found
}

// Example

// Add 
addTask('Task 1', 'This is the first task');
addTask('Task 2', 'This is the second task');

// View all
console.log('All tasks:', getAllTasks());

// Update
updateTask(1, 'Updated Task 1', 'This is the updated first task');
console.log('After update:', getAllTasks());

// Delete 
deleteTask(2);
console.log('After deletion:', getAllTasks());