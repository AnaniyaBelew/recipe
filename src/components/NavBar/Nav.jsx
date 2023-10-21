import {Link} from "react-router-dom"
const Navbar=()=>
{
    return(
        <div className="navbar">
                <div className="navigation">
                    <Link className='logo-container' to='/'>
                        Recipe App
                    </Link>
                    <Link className='logo-container' to='/shop'>
                        Shop
                    </Link>
                    <Link className='logo-container' to='/recipes'>
                        Recipes
                    </Link>
                    <Link className='logo-container' to='/features'>
                        Feauters
                    </Link>
                    <Link className='logo-container' to='/hotline'>
                        Hotline
                    </Link>
                </div>
                <div className="auth_nav">

                </div>
        </div>
    )
}
export default Navbar;