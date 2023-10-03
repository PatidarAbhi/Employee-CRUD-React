import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const addEmployee=createAsyncThunk(
    'employee/addEmployee', async ({companyId,employeeData},{rejectWithValue})=>
    {
        try{
               console.log("in add employee"+companyId);
               const response = await axios.post(`http://localhost:8088/companies/${companyId}/employees`, employeeData);
                return response.data;  
        }
        catch(error)
        {  
            console.log("in add employee error");
             return rejectWithValue(error.response.data);
        }
        
    }
);

const employeeSlice =createSlice({
    name:'employee',
    initialState:{
        employess:[],
        loading:false,
        error:null
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(addEmployee.pending,(state)=>
        {
            state.loading=true;
            state.error=null;
        })
        builder.addCase(addEmployee.fulfilled,(state,action)=>
        {
          state.loading=false;
          state.employess.push(action.payload);
        })
        builder.addCase(addEmployee.rejected,(state,action)=>
        {
            state.loading=false;
            state.error=action.payload;
        });       
    },

});
export default employeeSlice.reducer;