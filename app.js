const express = require('express');
const {get_all_task, get_taskByid, create_task, updateTask_Byid, delete_task, get_task_priority} = require('./controllers.JS');

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/",(req,res)=>{
    console.log(Tasks[1]);
    res.send("Welcome to the Task Assignment tool");

});
app.get("/tasks",get_all_task);
app.get("/tasks/:id",get_taskByid);
app.post("/tasks",create_task);
app.put('/tasks/:id',updateTask_Byid);
app.delete('/tasks/:id',delete_task);

//priprity get method

app.get("/tasks/priority/:level",get_task_priority);
app.listen(port, (err) => {
    if (err) {
        return console.log('Something bad happened', err);
    }
    console.log(`Server is listening on ${port}`);

});


// "pretest": "node -e \"if (process.version.slice(1).split('.')[0] < 18) { console.error('Unsupported Node.js version, please use version 18'); process.exit(1); }\"",
// "test": "tap test/*.js --disable-coverage"
module.exports = app;