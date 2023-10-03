import { useDispatch } from "react-redux";
import { addCompany, companyData } from "../slice/companyDisplay";


const CompanyNavbar = () => {
    const dispatch = useDispatch();

    return (
        <>
            <nav className="navbar bg-secondary navbar-expand-lg">
                <div className="container-fluid">
                    <div className="navbar-brand">Shakti Pump</div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <button className="nav-link" onClick={() => dispatch(companyData("home"))} >Companies</button>
                            </li>
                            <li className="nav-item">
                                <button className="nav-link" onClick={() => dispatch(addCompany("addCompany")) }>Add Company</button>
                            </li>
                        </ul>
                        
                    </div>
                </div>
            </nav>
        </>
    )
}
export default CompanyNavbar;
