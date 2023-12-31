import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { employeeData } from "../slice/DisplaySlice";
import { addNewEmployee } from "../slice/employeeOperation";


const AddEmployee=()=>
{
    const[employee,setEmployee]=useState(
        {
            name:"",
            doj:"",
            companyId:"",
        }
    )
    const dispatch= useDispatch()
    const handleSubmit=(e)=>
    {
        e.preventDefault();
        console.log("in add emp:"+employee.companyId+employee.name+employee.doj);
        // dispatch(addEmployee(
        //     {
        //          companyId: employee.companyId,
        //           employeeData:{
        //             name:employee.name,
        //             doj:employee.doj
        //         },
        //     }
        // ))

        dispatch(addNewEmployee(
          {
            companyId: employee.companyId,
             employeeData:{
               name:employee.name,
               doj:employee.doj
           },
       }
        ))

        dispatch(employeeData('home'))
    }
    return(
          
        <div id="addEmp">
        <h2>Fill the form to add a new Employee</h2>
      <form id="addEmpForm" onSubmit={handleSubmit}>

        <div className="mb-3">
        Enter Name:<input
            type="text"
            className="form-control"
            placeholder="Enter Name"
            value={employee.name} 
            onChange={(e) => setEmployee({ ...employee, name: e.target.value })} 
          />
          
        </div>
        <div className="mb-3">
         Enter Date of joining: <input
            type="date"
            className="form-control"
            placeholder="yyyy-MM-dd"
            value={employee.doj}
            onChange={(e) =>
              setEmployee({
                ...employee,
                doj: e.target.value,
              })
            }
            pattern="\d{4}-\d{2}-\d{2}"
          />
        </div>
         Enter companyId:<div className="mb-3">
          <input
            type="number"
            className="form-control"
            placeholder="Company ID"
            value={employee.companyId}
            onChange={(e) =>
              setEmployee({
                ...employee,
                companyId: e.target.value,
              })
            }
          />
        </div>
        <div className="mb-3">
          <button type="submit" className="btn btn-primary">
            Add Employee
          </button>
        </div>
      </form>
    </div>
  );
}
export default AddEmployee;