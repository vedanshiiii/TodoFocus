import { createSlice } from "@reduxjs/toolkit";




const taskSlice = createSlice({
    name: "taskss",
    initialState: {
        tasks:[{
                id:124214124,val:'First fake',checked:false
            },
            {
                id:6908979098,val:'Second fake',checked:false
            }]
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
    }

})


export const {addTask,toggle,deleteTask} = taskSlice.actions;
const TasksReducer = taskSlice.reducer;
export default TasksReducer


  
