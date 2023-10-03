import { createSlice } from "@reduxjs/toolkit";

const display=createSlice({
  name:'DisplaySlice',
  initialState:'home',
  reducers:{
           employeeData:(state,action)=>
           {
               return action.payload
           },
           addEmpPage: (state, action) => {
             return action.payload;
          },
  }
})

export const {employeeData,addEmpPage}=display.actions
export default display.reducer