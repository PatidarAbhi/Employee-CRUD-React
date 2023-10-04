import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { deleteEmployeeById, getEmployee, modifyEmployee } from "../slice/employeeOperation"



const EmployeeData = () => {
    const { employees, loading, error } = useSelector((state) => state.allEmp)
    const [updateEmployee, setUpdateEmployee] = useState({});
    console.log("employee data" + employees);
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getEmployee());
    }, []);

    const sortedEmployees = employees.slice().sort((a, b) => a.id - b.id);



    const handleUpdate = (emp) => {
        setUpdateEmployee(emp);
    };

    const handleUpdateSave = () => {
        dispatch(modifyEmployee(updateEmployee))
    };

    if (loading) {
        return (
            <h1>Loading.....!</h1>
        )
    }

    if (error) {
        return (
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
                    {sortedEmployees.map((ele) => (
                        <tr key={ele.id}>
                            <td>{ele.id}</td>
                            <td>{ele.name}</td>
                            <td>{ele.doj}</td>

                            <td>
                                <button type="button" onClick={() => handleUpdate(ele)} className="btn btn-success" data-bs-toggle="modal" data-bs-target={`#exampleModal-${ele.id}`} >
                                    Update
                                </button>
                                <div className="modal fade" id={`exampleModal-${ele.id}`} tabindex="-1" aria-labelledby={`exampleModalLabel-${ele.id}`} aria-hidden="true">
                                    <div className="modal-dialog">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h5 className="modal-title" id={`exampleModalLabel-${ele.id}`}>Update Details</h5>
                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                            <div className="modal-body">
                                                <form id="addEmpForm">
                                                    <div className="mb-3">
                                                        <input
                                                            type="number"
                                                            className="form-control"
                                                            placeholder="Employee Id"
                                                            defaultValue={ele.id} // Bind input value to state
                                                            // Update state on input change
                                                            readOnly
                                                        />
                                                    </div>
                                                    <div className="mb-3">
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            placeholder="Enter Name"
                                                            defaultValue={ele.name} // Bind input value to state
                                                            onChange={(e) => setUpdateEmployee({ ...updateEmployee, name: e.target.value })} // Update state on input change
                                                        />
                                                    </div>
                                                    <div className="mb-3">
                                                        <input
                                                            type="date"
                                                            className="form-control"
                                                            placeholder="yyyy-MM-dd"
                                                            value={updateEmployee ? updateEmployee.doj : ""}
                                                            onChange={(e) => setUpdateEmployee({ ...updateEmployee, doj: e.target.value })}
                                                            pattern="\d{4}-\d{2}-\d{2}"
                                                        />
                                                    </div>
                                                </form>
                                            </div>
                                            <div className="modal-footer">
                                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                <button type="button" onClick={handleUpdateSave} className="btn btn-primary" data-bs-dismiss="modal">Save changes</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>&nbsp;&nbsp;
                            </td><td><button  className="btn btn-danger" onClick={() => dispatch(deleteEmployeeById(ele.id))}>Delete</button></td>
                        </tr>
                    ))}
                </table>
            </div>
        </>
    );

}
export default EmployeeData;