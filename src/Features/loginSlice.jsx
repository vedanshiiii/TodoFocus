import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


export const loginApiHit = createAsyncThunk(
  "loginS/loginApiHit",
  async ({name,password})=>{
  console.log('logiinng ', name, ' with password ', password);
  return new Promise((resolve) => {
    if (name === "error@error.com") {
        throw new Error("Invalid credentials!");
      } 
      else
   { setTimeout(() => {
      const a = Date.now();
      console.log("resolved token", a);
      resolve(a);
    }, 5000);}
  });

})


export const loginslice = createSlice({
    name: "loginS",
    initialState : {
      token: JSON.parse(sessionStorage.getItem('token')),
      status: 'idle'
    },
    reducers:{
      logout: (state)=>{
        sessionStorage.removeItem('token')
        return {...state,status:'idle',token:''}
      },
    },
    extraReducers:(builder)=>{
      builder.addCase(
        loginApiHit.pending,(state)=>{
          return {...state,status:'logging'};
      }).addCase(
        loginApiHit.rejected,(state)=>{
          return {...state,status:'failed'};
        }
      ).addCase(
        loginApiHit.fulfilled,(state,action)=>{
          sessionStorage.setItem('token',action.payload);
          return {...state,token:action.payload , status:'failed'};
        }
      )
    }
  }
)





export const {logout} = loginslice.actions;
const loginReducer = loginslice.reducer;
export default loginReducer