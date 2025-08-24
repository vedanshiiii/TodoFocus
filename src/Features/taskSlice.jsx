/* eslint-disable react-refresh/only-export-components */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";



export const fetchTasks = createAsyncThunk('taskSlice/fetchTasks',async()=>{
    const res = await axios.get('http://localhost:8080/api/tasks');
    const data = await res.data;
    return data;

})



const taskSlice = createSlice({
    name: "taskss",
    initialState: {
        tasks:[]
     },
    reducers:{
        addTask:(state,action)=>{
            state.tasks.push({id:Date.now(),val:action.payload,checked:false})
        },
        toggle:(state,action)=>{
            const id = action.payload;
            state.tasks=state.tasks.map((task)=>{
                return task.id != id ? task : {...task,checked:!task.checked} ;
            })
        },
        deleteTask:(state,action)=>{
            const id = action.payload;
            state.tasks=state.tasks.filter((task)=> task.id != id)
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchTasks.fulfilled,(state,action)=>{
            state.tasks=action.payload;
        })
    }

})


export const {addTask, toggle, deleteTask} = taskSlice.actions;
const TasksReducer = taskSlice.reducer;
export default TasksReducer


  
