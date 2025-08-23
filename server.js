import dotenv from "dotenv";
dotenv.config();

import express from 'express'

const app = express();
// const port =8080;
const port = process.env.PORT;

app.get('/',(req,res)=>{
    res.send('World')
})
app.listen(port,()=>{
    console.log(`started at port for VEDANSHI ${port}`);
})