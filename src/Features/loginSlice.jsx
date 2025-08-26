import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const loginApiHit = createAsyncThunk(
  "loginS/loginApiHit",
  async ({name,password,act }) => {
    try {
      console.log('logiinng ', name, ' with password ', password);
      const creds = { usernm: name, psw: password };
      const url = act == 'login' ? 'http://localhost:8080/user/login' : 'http://localhost:8080/user/create'

      const res = await axios.post(url, creds);
      console.log('res is. ', res.data)
      return res.data;


    }
    catch (err) {
      console.log('err', err)
    }


  })


export const loginslice = createSlice({
  name: "loginS",
  initialState: {
    token: JSON.parse(sessionStorage.getItem('token')),
    status: 'idle'
  },
  reducers: {
    logout: (state) => {
      sessionStorage.removeItem('token')
      return { ...state, status: 'idle', token: '' }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      loginApiHit.pending, (state) => {
        return { ...state, status: 'logging' };
      }).addCase(
        loginApiHit.rejected, (state) => {
          return { ...state, status: 'failed' };
        }
      ).addCase(
        loginApiHit.fulfilled, (state, action) => {
          if (action.payload.success) {
            sessionStorage.setItem('token', action.payload.message);
            return { ...state, token: action.payload };
          }
          return { ...state, status: action.payload.message };

        }
      )
  }
}
)





export const { logout } = loginslice.actions;
const loginReducer = loginslice.reducer;
export default loginReducer