import CompanyNavbar from "./CompanyNavbar";
import { NavLink } from 'react-router-dom';
import CompanyDisplay from "./CompanyDisplay"

const Company = () => {
    return (
        <>
            <div>
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                    <div className="container-fluid text-center">
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav">
                                <NavLink to='/' className="nav-link " >Company Page</NavLink>
                                <NavLink to='/employee' className="nav-link" >Employee Page</NavLink>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
            <div>
               <CompanyNavbar></CompanyNavbar>
            </div>
            <div>
                <CompanyDisplay></CompanyDisplay>
            </div>

        </>
    )
}
export default Company;