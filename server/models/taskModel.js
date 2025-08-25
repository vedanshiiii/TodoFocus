import { Schema,model } from "mongoose";

const taskSchema = new Schema({
    id:{
        type: Number,
        default: Date.now
    },
    val:{
        type: String,
        required: true,
    },
    checked:{
        type: Boolean,
        default: false
    }
})
 //imp 3rd param, it is sayign which collection to look for
 
const Tasks = model('tasks',taskSchema,"TodoTasks")
export default Tasks;