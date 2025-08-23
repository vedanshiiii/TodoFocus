import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "../Features/loginSlice";
import TasksReducer from "../Features/taskSlice";

export const store = configureStore({
    reducer:{
        login : loginReducer,
        tasks : TasksReducer,

    }
})