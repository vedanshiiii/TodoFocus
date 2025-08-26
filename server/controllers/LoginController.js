import Login from "../models/loginModel.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken";
import dotenv from 'dotenv'

dotenv.config();

export const getCreds = async (req, res) => {
    try {
        const users = await Login.find();
        console.log("users are ", users);
        if (users.length < 1) {
            console.log("No users found");
            return res.status(500).json({ success: false, message: "No users found" })
        }
        res.json(users)
    }
    catch {
        res.status(500).json({ success: false, message: "error retrieving users" })
    }
}



export const signIn = async (req, res) => {
    try {
        const {usernm , psw} = req.body;
        console.log('trying to signin')
        const users = await Login.findOne({ username: usernm });
        if (users) {
            console.log("existing");
            return res.status(200).json({ success: false, message: "Existing" });
        }

        const salt = await bcrypt.genSalt()
        const hashps = await bcrypt.hash(psw, salt);

        const newUsr = new Login({ username: usernm, passwordHash: hashps });
        // eslint-disable-next-line no-unused-vars
        const newly = await newUsr.save()


        const accesstoken = jwt.sign({username:usernm},process.env.secretKeyjwt)
        

        return res.status(201).json({ success: true, message: "User Created",token:accesstoken });

    }
    catch (err) {
        console.error("Error creating user:", err.message);
        res.status(500).json({ success: false, message: err.message });
      }
}


export const logIn = async (req, res) => {
    try {
        const {usernm , psw} = req.body;
        console.log('trying to logIn')
        const users = await Login.findOne({ username: usernm });
        if (!users) {
            // const res =signIn(req,res);
            return res.status(200).json({ success: false, message: "New" });
        }

       const comp = await bcrypt.compare(psw, users.passwordHash);
       if(comp){
        const accesstoken = jwt.sign({username:usernm},process.env.secretKeyjwt)

        return res.status(201).json({ success: true, message: "User logged in",token:accesstoken  });
       }
       return res.status(200).json({ success: false, message: "Invalid" });


    }
    catch (err) {
        console.error("Error creating user:", err.message);
        res.status(500).json({ success: false, message: err.message });
      }
}

