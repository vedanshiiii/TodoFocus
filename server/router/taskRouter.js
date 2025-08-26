import { Router } from "express";
import connectDb from "../db/db.js";
import { fetchTasks,addTask,delTask,modtask} from "../controllers/TaskController.js"
;
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
router.use(logger);

router.get('/tasks',fetchTasks);

router.post('/tasks',addTask);

router.delete('/tasks/:id',delTask);

router.put('/tasks/:id',modtask);



export default router;