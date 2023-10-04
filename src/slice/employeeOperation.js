import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const initialState =
{
    employees: [],
    loading: false,
    error: null
}

// for getting list of employee
export const getEmployee = () => {
       return async (dispatch, state) => {
        try {
            dispatch(empDataLoading());
            const response = await axios.get('http://localhost:8088/companies/getEmp');
            console.log("response::" + response)
            dispatch(fetchEmpFulField(response.data))
        }
        catch (error) {
            console.log("in error")
            dispatch(fetchingError());
        }
    }
}

//for adding employee
export const addNewEmployee = ({ companyId, employeeData }) => {
    return async (dispatch)=>
    {
        try{
            console.log("in add employee"+companyId);
            const response = await axios.post(`http://localhost:8088/companies/${companyId}/employees`, 
                     employeeData);
             dispatch(addNewEmployee(response.data));
        }
        catch(error)
        {
            dispatch(fetchingError());
        }
    }
}


//for delete employee
export const deleteEmployeeById=(employeeId)=>
{
    return async (dispatch)=>
    {
        try{
            dispatch(empDataLoading());
            console.log("inside deleteEmp");
            const response= await axios.delete(`http://localhost:8088/companies/delete/${employeeId}`);
            console.log(response.data)
            dispatch(deletionEmployee(employeeId))
            
        }
        catch(error)
        {
            dispatch(fetchingError());
        }
    }
}

//for update employee
export const modifyEmployee=(employeeData)=>
{
    console.log("emp in update"+employeeData.name);
       
    return async(dispatch)=>{
        dispatch(empDataLoading());
    try{
        const response= await axios.put(`http://localhost:8088/companies/update`, employeeData);
        console.log("response in update::"+response.data)
        dispatch(updateEmployee(response.data))
    }

    catch(error)
    {
        dispatch(fetchingError());
    }
}
}


export const AllEmployeeSlice = createSlice({
    name: 'employee',
    initialState,
    reducers: {

        fetchEmpFulField: (state, action) => {
            state.loading = false;
            state.employees = action.payload;
        },
        empDataLoading: (state, action) => {
            state.loading = true;
        },
        fetchingError: (state) => {
            state.loading = true;
        },
        newEmployeeAdd: (state, action) => {
              state.loading=false;
             let tempEmps=[...state.employees];
             tempEmps.push(action.payload);
             state.employees=tempEmps;
        },
        deletionEmployee:(state,action)=>
        {
            state.loading=false;
            state.employees=state.employees.filter((e)=>e.id!==action.payload);
        },
        updateEmployee:(state,action)=>
        {  state.loading=false;
            let tempEmps=[...state.employees];
            let updatedList= tempEmps.filter((e)=>e.id!==action.payload.id);
            updatedList.push(action.payload);
             state.employees=updatedList;
        }


    }

})
export const { fetchEmpFulField, empDataLoading, fetchingError,newEmployeeAdd ,deletionEmployee,updateEmployee} = AllEmployeeSlice.actions;

export default AllEmployeeSlice.reducer



