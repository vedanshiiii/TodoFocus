/* eslint-disable no-unused-vars */
import dotenv from "dotenv";
import express from 'express'
import cors from 'cors'
import taskRouter from './server/router/taskRouter.js';
import loginRouter from './server/router/loginRouter.js';

dotenv.config();
const port = process.env.PORT;
const app = express();


app.use(express.json());
app.use(cors());


function logger(req,res,next){
    console.log('logged from server');
    next();
}
app.use(logger);

app.get('/',(req,res,next)=>{
    res.send('<h1>World</h1>')
    // next(new Error('Hi Vedanshi, something went wrong'));
})

app.use('/api',taskRouter)
app.use('/user',loginRouter)



app.use((err,req,res,next)=>{
    // console.log(err.stack);
    res.status(500).json({message:'Errorrrrrrr'})
    // next();

})


app.listen(port,()=>{
    console.log(`started at port for VEDANSHI ${port}`);
})