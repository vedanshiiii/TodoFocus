/* eslint-disable no-unused-vars */
import dotenv from "dotenv";
import express from 'express'
import cors from 'cors'
import path from 'path';
import taskRouter from './server/router/taskRouter.js';
import loginRouter from './server/router/loginRouter.js';
import url from 'url';

dotenv.config();
const port = process.env.PORT;
const app = express();


const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
console.log('-----', __filename , __dirname );

app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname,"./dist")));




function logger(req,res,next){
    console.log('logged from server');
    next();
}
app.use(logger);
app.use('/api',taskRouter)
app.use('/user',loginRouter)




app.get('/',(req,res,next)=>{
    // res.send('<h1>World</h1>')
    res.sendFile(path.resolve(__dirname,"dist","index.html"))
    // next(new Error('Hi Vedanshi, something went wrong'));
});

// app.use((err,req,res,next)=>{
//     // console.log(err.stack);
//     res.status(500).json({message:'Errorrrrrrr'})
//     // next();

// })


app.use((req, res) => {
    res.sendFile(path.resolve(__dirname, "dist", "index.html"));
  });

  

// app.get('*',(req,res,next)=>{
//     res.send('<h1>World</h1>')
//     // res.sendFile(path.resolve(__dirname,"dist","index.html"))
//     // next(new Error('Hi Vedanshi, something went wrong'));
// });


app.listen(port,()=>{
    console.log(`started at port for VEDANSHI ${port}`);
})