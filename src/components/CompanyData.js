import { useDeferredValue } from "react"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getCompanies } from "../slice/compnaySlice"


const CompanayData=()=>
{
    console.log("inside CompanayData")
    const {companies,loading,error}=useSelector((state)=>state.companyData)
    console.log("show copmany in company::"+companies);
    const dispatch =useDispatch()
    useEffect(()=>
    {
        console.log("inside useeffect")
        dispatch(getCompanies());
    },[])

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
                <h1>Compnay Details</h1>

                <table id="compDataTable">
                    <tr>
                        <th scope="col">id</th>
                        <th scope="col">name</th>
                        <th scope="col">Employee List</th>
                    </tr>
                    {companies.map((company) => (
                        <tr key={company.id}>
                            <td>{company.id}</td>
                            <td>{company.name}</td>
                            <td>
                                {company.employees.map((emp) => (
                                    <div key={emp.id}>
                                        <p>Id: {emp.id}, Name: {emp.name}, Date Of Joining: {emp.doj}</p>
                                    </div>
                                ))}
                            </td>
                        </tr>
                    ))}
                </table>
            </div>
        </>
    );  

}

export default CompanayData;

