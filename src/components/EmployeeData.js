import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAllData } from "../slice/EmployeeSlice"
import { deleteEmp } from "../slice/deleteEmployee"

const EmployeeData=()=>
{
    const {employees,loading,error}=useSelector((state)=>state.data)
    console.log("employee data"+employees);
    const dispatch=useDispatch()
    useEffect(()=>
    {
        dispatch(getAllData());
    }, []);

    if(loading)
    {
         return(
            <h1>Loading.....!</h1>
         )
    }

    if(error)
    {
        return(
            <h1>Something Went Wrong</h1>
        )
    }
    

    return (
        <>
            <div id="displayDiv">
                <h1>List of Employee</h1>

                <table id="compDataTable">
                    <tr>
                        <th scope="col">id</th>
                        <th scope="col">name</th>
                        <th scope="col">date of joining</th>
                        <th scope="col">operations</th>
                    </tr>
                    {employees.map((ele) => (
                        <tr key={ele.id}>
                            <td>{ele.id}</td>
                            <td>{ele.name}</td>
                            <td>{ele.doj}</td>
                            <td><button>Update</button>&nbsp;&nbsp;</td>
                            <td><button onClick={() => dispatch(deleteEmp(ele.id))}>Delete</button></td>
                        </tr>
                    ))}
                </table>
            </div>
        </>
    );

}
export default EmployeeData;