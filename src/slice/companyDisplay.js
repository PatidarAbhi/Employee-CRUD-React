import { createSlice } from "@reduxjs/toolkit";


const companyDisplay =createSlice({
    name:'companyDisplaySlice',
    initialState:{
        value: 'home'
    },
    reducers:{
        companyData:(state,action)=>
        {
           state.value=action.payload;
        },
        addCompany:(state,action)=>
        {
          state.value=action.payload
        }
    }
});

export const{companyData,addCompany}=companyDisplay.actions;
export default companyDisplay.reducer;