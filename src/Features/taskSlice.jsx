/* eslint-disable react-refresh/only-export-components */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const token = JSON.parse(sessionStorage.getItem("token"));

export const fetchTasks = createAsyncThunk('taskSlice/fetchTasks',async()=>{
    const res = await axios.get('http://localhost:8080/api/tasks',{headers: {Authorization:`Bearer ${token}`}});
    return res.data;

})


export const addTasks = createAsyncThunk('taskSlice/addTasks',async (val)=>{
    const tosave={
        id:Date.now(),
        val:val,
        checked:false
    }
    const res = await axios.post('http://localhost:8080/api/tasks',tosave,{headers: {Authorization:`Bearer ${token}`}});
    return res.data;

})

export const deleteTask = createAsyncThunk('taskSlice/deletetask',async (id)=>{
    const res = await axios.delete(`http://localhost:8080/api/tasks/${id}`,{headers: {Authorization:`Bearer ${token}`}});
    if(res && res.data && res.data.success){
        return res.data;
    }
    return false;

})

export const toggleTask = createAsyncThunk('taskSlice/toggleTask',async (id)=>{
    const res = await axios.put(`http://localhost:8080/api/tasks/${id}`,{headers: {Authorization:`Bearer ${token}`}});
    return res.data;

})



const taskSlice = createSlice({
    name: "taskss",
    initialState: {
        tasks:[]
     },
    reducers:{
        // addTask:(state,action)=>{
        //     state.tasks.push({id:Date.now(),val:action.payload,checked:false})
        // },
        // toggle:(state,action)=>{
        //     const id = action.payload;
        //     state.tasks=state.tasks.map((task)=>{
        //         return task.id != id ? task : {...task,checked:!task.checked} ;
        //     })
        // },
        // deleteTask:(state,action)=>{
        //     const id = action.payload;
        //     state.tasks=state.tasks.filter((task)=> task.id != id)
        // }
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchTasks.fulfilled,(state,action)=>{
            state.tasks=action.payload;
        }).addCase(addTasks.fulfilled,(state,action)=>{
            // state.tasks=action.payload;
            state.tasks.push(action.payload)
        })
        .addCase(deleteTask.fulfilled,(state,action)=>{
            if(action.payload){
                const id = action.payload.id;
                console.log('deleteedddd');
                state.tasks=state.tasks.filter((task)=> task.id != id)
            }
            
        })
        .addCase(toggleTask.fulfilled,(state,action)=>{
            if(action.payload && action.payload.success){
                const id = action.payload.id;
            state.tasks=state.tasks.map((task)=>{
                return task.id != id ? task : {...task,checked:!task.checked} ;
            })
            }
            
        })
    }

})


// export const {addTask, toggle, deleteTask} = taskSlice.actions;
const TasksReducer = taskSlice.reducer;
export default TasksReducer


  
