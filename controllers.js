const fs= require('fs');
const path = './task.json';
// update data into the json file
const saveTasksToFile = (tasks)=>{
    fs.writeFileSync(path, JSON.stringify({tasks:tasks},null,2),'utf-8');
}

// read data from json
const loadTaskFromFile =()=>{
    const data=fs.readFileSync(path,'utf-8');
    return JSON.parse(data).tasks;
}
//get all task
const get_all_task =(req,res)=>{
 try{
    const all_data=loadTaskFromFile();
    if(all_data.length<=0){
         return res.status(404).json({message:'The data is empty'})
    }
    //filtering base on the quering
    const {completed}=req.query;
    if (completed !== undefined){
      if (completed === 'true' || completed === 'false'){
        
        const completedStatus = completed === 'true';
        // Filter tasks based on the `completed` status
        const filteredtask = all_data.filter(task => task.completed === completedStatus);
        return res.status(200).json(filteredtask);
      }
      else {
         return res.status(400).json({message:"The completed query is not exits"});
       }

      

    }
    res.status(200).json(all_data);
 } catch(error){
    res.status(500).json({message:'The server side error occured',error});
 }
};

//get all the task by id
const get_taskByid =(req,res)=>{
    try{
        const id = req.params.id;
        if (isNaN(id)) {
          return res.status(400).json({ error: 'Invalid task ID. ID must be a number.' });
        }
        const Tasks=loadTaskFromFile();
        const task_data=Tasks.find((task_id)=>task_id.id===parseInt(id));
        if(!task_data) {
          return res.status(404).json({
            message:'Task not Found'
          });
        }
        res.status(200).json(task_data);
    }
    catch(error){
       res.status(500).json({message:'The server side error occured',error});
    }
}

// create the new task 

const create_task=(req,res)=>{
    try{

    
    const task=req.body;
    if ( !task.title || 
        typeof task.title !== 'string' || 
        !task.description || 
        typeof task.description !== 'string' || 
        !task.level || 
        typeof task.level !== 'string' || 
        task.completed === undefined || 
        typeof task.completed !== 'boolean'){
        return res.status(400).json(
            {message:"Invalid request body the should have title, description, completed and the type of completed shold be Boolean" });

    }
    const Tasks=loadTaskFromFile();
    task.timestamp = Date.now();
    task.id=Tasks.length+1;
    Tasks.push(task);
    saveTasksToFile(Tasks);
    res.status(200).json(task);
    }
    catch(error){
        res.status(500).json({message:'The server side error occures',error});
    }
}

const updateTask_Byid =(req,res)=>{
    try {
        const id = req.params.id;
        if (isNaN(id)) {
          return res.status(400).json({ error: 'Invalid task ID. ID must be a number.' });
         }
        const raw_task = req.body;
        const Tasks = loadTaskFromFile(); 
        let up_task = Tasks.find((task) => task.id === parseInt(id)); 
        // Validate the request body
        if (
          !raw_task.title || 
          typeof raw_task.title !== 'string' || 
          !raw_task.description || 
          typeof raw_task.description !== 'string' || 
          !raw_task.level || 
          typeof raw_task.level !== 'string' || 
          raw_task.completed === undefined || 
          typeof raw_task.completed !== 'boolean'
        ) {
          return res.status(400).json({
            message:
              'Invalid request body. The task should have a title (string), description (string), and completed (boolean), level(String).',
          });
        }
    
        // Check if the task was found
        if (!up_task) {
          return res.status(404).json({
            message: 'Task not found',
          });
        }
        console.log(up_task);
        up_task.title = raw_task.title;
        up_task.description = raw_task.description;
        up_task.completed = raw_task.completed;
        up_task.level=raw_task.level;
        up_task.timestamp=Date.now();
        saveTasksToFile(Tasks);
        res.status(200).json(up_task);
      } catch (error) {
        res.status(500).json({ message: 'A server-side error occurred', error });
      }
    };


const delete_task =(req,res)=>{
  try{
   const id=req.params.id;
   if (isNaN(id)) {
    return res.status(400).json({ error: 'Invalid task ID. ID must be a number.' });
   }
   const Tasks=loadTaskFromFile();
   const task_d=Tasks.find((task_i)=> task_i.id===parseInt(id));
   if (!task_d){
    return res.status(404).json({message:"Task not found"});
   }
   const index=Tasks.indexOf(task_d);
   Tasks.splice(index,1);
   saveTasksToFile(Tasks);
   res.status(200).json(task_d);
  }
  catch(error){
    res.status(500).json({message:'A server-side error occurred',error});
  }

};


//Priority method get task
const get_task_priority =(req,res)=>{
  try{
    const u_level=req.params.level;
    const validate_level=['low','medium','high'];

    if (!validate_level.includes(u_level)){
      return res.status(400).json({
        message:"The input level is not valid, level should be 'low','medium','high' "
      });
    }
    const Tasks=loadTaskFromFile();
    all_level=Tasks.filter((task_d) => task_d.level=== u_level)
    res.status(200).json(all_level)
  }
  catch(error){
    res.status(500).json({message:'A server-side error occurred',error});
  }
};
module.exports = {get_all_task, get_taskByid, create_task, updateTask_Byid, delete_task, get_task_priority};