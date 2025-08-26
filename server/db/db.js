import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const connectDb = (dbnm)=>{

    mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        dbName: dbnm // <-- important to use ToDoApp DB
      })
      .then(() => console.log("MongoDB connected ✅"))
      .catch(err => console.log(err));

}


    // connect to MongoDB

  

  export default connectDb;