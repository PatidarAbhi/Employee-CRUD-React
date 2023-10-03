import { useSelector } from "react-redux";
import EmployeeData from "./EmployeeData";
import AddEmployee from "./AddEmployee";

const Display=()=>
{
    const view=useSelector((state)=>state.showDisplay)
    return(
        <>
   {view === "home" ? <EmployeeData/> : null}   
   {view==='addEmployee'?<AddEmployee/>:null}
   </>

    );
}

export default Display;