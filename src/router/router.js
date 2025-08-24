import { Router } from "express";

const router = Router();


const tasks = [{
    id:124214124,val:'First fake',checked:false
},
{
    id:6908979098,val:'Second fake',checked:true
}];

function logger(req,res,next){
    console.log('logged from router');
    next();
}
router.use(logger);

router.get('/tasks',(req,res)=>{
    console.log('tasks needed');
   res.json(tasks);
})


export default router;