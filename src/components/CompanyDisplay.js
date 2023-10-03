import { useSelector } from "react-redux"
import CompanayData from "./CompanyData"


const CompanyDisplay =()=>
{
    const{value} = useSelector((state)=>state.showCompany)
    console.log("value::"+value)
    return(
        <>
        <div>
            {value === "home" ? <CompanayData></CompanayData>: null}       
            {value === "addCompany" ? null : null}      
        </div>
        
    </>

    )
}

export default CompanyDisplay;