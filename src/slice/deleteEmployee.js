import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const deleteEmp=createAsyncThunk('delete',async (employeeId)=>
{
    console.log("inside deleteEmp");
    const response= await axios.delete(`http://localhost:8088/companies/delete/${employeeId}`);
    console.log(response.data)
    return response.data;
})


export const deleteEmployee=createSlice({
    name:'deleteEmp',
    initialState:{
        status:'',
        loading:false,
        error:null
    },
    reducers:{},
    extraReducers:{[deleteEmp.pending]:(state) =>
    {
         state.loading=true;
    },
    [deleteEmp.fulfilled]:(state,action)=>
    {
        state.loading=false;
       // state.status=action.payload,
    },
    [deleteEmp.error]:(state)=>
    {
        state.error=true;
    }
}

})



