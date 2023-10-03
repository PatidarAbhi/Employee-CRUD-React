import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

export const getAllData=createAsyncThunk("employees",async()=>{
    const response= await axios.get('http://localhost:8088/companies/getEmp');
    console.log("response::"+response)
    return response.data
})

const employee =createSlice({
    name:'employee',
    initialState:
    {
        employees:[],
        loading:false,
        error:null
    },
    extraReducers:{
        [getAllData.pending]:(state)=>
        {
              state.loading=true
        },
        [getAllData.fulfilled]:(state,action)=>
        {
            state.loading=false;
            state.employees=action.payload;
        },
        [getAllData.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
    }
})
export default employee.reducer;