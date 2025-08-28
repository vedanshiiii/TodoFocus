import { Router } from "express";
import connectDb from "../db/db.js";
import { fetchTasks,addTask,delTask,modtask} from "../controllers/TaskController.js";
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();
const router = Router();

connectDb('ToDoApp');

// const tasks = [{
//     id:124214124,val:'First fake',checked:false
// },
// {
//     id:6908979098,val:'Second fake',checked:true
// }];

function logger(req,res,next){
    console.log('logged from tasks router');
    next();
}


//jwt backend authorization
function authorize(req,res,next){
    const tok = req.headers["authorization"];
    const token = tok && tok.split(' ')[1];

    if(!token){
        res.status(401).json({success:false,message:"invalid token"})
    }

    jwt.verify(token,process.env.secretKeyjwt,(err)=>{
        if(err){
            res.status(401).json({success:false,message:"invalid token"})
        }
        next();
    });
    console.log('logged from AUTH router');
 
}


router.use(logger);

router.get('/tasks',authorize,fetchTasks);

router.post('/tasks',authorize,addTask);

router.delete('/tasks/:id',authorize,delTask);

router.put('/tasks/:id',authorize,modtask);



export default router;