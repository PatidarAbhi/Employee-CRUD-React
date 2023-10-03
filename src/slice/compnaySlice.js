import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const getCompanies=createAsyncThunk('companies',async()=>
{
    console.log("inside getCompanies")
      const response=  await axios.get("http://localhost:8088/companies/")
      console.log("response"+response.data);
      return response.data;
})

export const companySlice=createSlice({
    name:'companySlice',
    initialState:{
        companies:[],
        loading:false,
        error:null
    },
    extraReducers:{
        [getCompanies.pending]: (state) => {
            state.loading = true;
        },
        [getCompanies.fulfilled]: (state, action) => {
            state.loading = false;
            state.companies = action.payload;
        },
        [getCompanies.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
    }

})
export default companySlice.reducer;