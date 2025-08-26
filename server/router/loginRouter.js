import { Router } from "express";
import connectDb from "../db/db.js";
import { getCreds,logIn,signIn } from "../controllers/LoginController.js";



const router = Router();

connectDb('ToDoApp');



function logger(req,res,next){
    console.log('logged from login router');
    next();
}
router.use(logger);




router.get('/getusers',getCreds);

router.post('/create',signIn);
router.post('/login',logIn);

// router.delete('/tasks/:id',delTask);

// router.put('/tasks/:id',modtask);



export default router;