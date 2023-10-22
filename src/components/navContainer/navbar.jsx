import "./navbar.component.css"
import { Outlet } from "react-router-dom";
const NavBarContainer=()=>
{
    return(
        <div className="App">
            <div className="Nav_container">
                <div className="header_nav">
                    Navigation
                </div>
                <div className="header_content">
                        Content
                </div>
            </div>
            <Outlet/>
        </div>
    )
}
export default NavBarContainer;