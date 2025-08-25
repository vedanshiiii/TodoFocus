/* eslint-disable no-unused-vars */
// import Tasks from "../models/taskModel";
import Tasks from "../models/taskModel.js";

export const fetchTasks = async(req,res)=>{
    console.log('tasks needed');
    try{ const tasks = await Tasks.find();
        console.log("tasks are",tasks);
        if(tasks.length<1){
            console.log("No Tasks found");
            return res.status(500).json({success:false,message:"No Tasks found"})
        }
       res.json(tasks)
    }
       catch{
        res.status(500).json({success:false,message:"error retrieving tasks"})
        }
   
}


export const addTask = async(req,res)=>{
    console.log('task to be added');
    try{ 
        const newtask = new Tasks(req.body);
        const newly = await newtask.save()
        // const tasks = await Tasks.find();
        // console.log("tasks are",tasks);
        // if(tasks.length<1){
        //     console.log("No Tasks found");
        //     return res.status(500).json({success:false,message:"No Tasks found"})
        // }
       res.json(newly)
    }
       catch{
        res.status(500).json({success:false,message:"error adding tasks"})
        }
   
}


export const delTask = async(req,res)=>{
    console.log('task to be deleted');
    try{ 
        const {id} = req.params;
        const task = await Tasks.findOneAndDelete({id:id});

        if(!task){
            console.log("No Task found to delete");
            return res.status(500).json({success:false,message:"No Task found to delete"})
        }
        return res.status(200).json({success:true,id:id});
    }
       catch{
        res.status(500).json({success:false,message:"error deleting tasks"})
        }
   
}


export const modtask = async(req,res)=>{
    console.log('task to be deleted');
    try{ 
        const {id} = req.params;
        const task = await Tasks.findOne({id});

        if(!task){
            console.log("No Task found to Update");
            return res.status(500).json({success:false,message:"No Task found to Update"})
        }
        const updated = await Tasks.findOneAndUpdate({id},
            [
                { $set: { checked: { $not: "$checked" } } }  // <-- toggles value
              ],
            {new:true});   //return the new updated value, not the old one
        return res.status(200).json({success:true,id:id});
        // return res.json(updated);
    }
       catch{
        res.status(500).json({success:false,message:"error updating tasks"})
        }
   
}
