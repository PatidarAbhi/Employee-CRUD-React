import { addEmpPage, employeeData } from "../slice/DisplaySlice";
import { useDispatch } from "react-redux";
import addEmployee from "../slice/addEmployee";
import { Link } from "react-router-dom";

const Navbar=()=>
{
   const dispatch=useDispatch();
    return(
        <>
        <nav className="navbar bg-secondary navbar-expand-lg ">
            <div className="container-fluid">
                <div className="navbar-brand">Shakti Pump</div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" onClick={() => dispatch(employeeData("home"))} aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                                <a className="nav-link" onClick={() => dispatch(addEmpPage("addEmployee"))} href="#">Add Employee</a>
                            </li>
                    </ul>
                </div>
            </div>
        </nav>
    </>
)
}

export default Navbar;