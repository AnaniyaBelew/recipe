import { Fragment } from "react";
import "./navbar.component.css"
import { Link, Outlet } from "react-router-dom";
const NavBarContainer=()=>
{
    return(
        <Fragment>
            <div className="Nav_container">
                <div className="header_nav">
                    <div className="routes">
                        <Link to='/'>Home</Link>
                        <Link to='/recipe'>Recipe</Link>
                        <Link to='/feauters'>Feauters</Link>
                        <Link to='/Hotline'>Hotline</Link>
                    </div>
                    <div className="auth_nav">
                        <Link to='/login'>Login</Link>
                        <Link to='/signup'>Signup</Link>
                    </div>
                </div>
                <div className="header_content"></div>
                
            </div>
            <Outlet/>
        </Fragment>
    )
}
export default NavBarContainer;