import { Link, NavLink } from "react-router-dom";
// import userDefaultPic from '../../../assets/user.png';
import { useContext } from "react";
// import { AuthContext } from "../../../providers/AuthProvider";

const Navbar = () => {

    // const { user, logOut } = useContext(AuthContext);

    const handleSignOut = () => {
        logOut()
        .then()
        .catch()
    }

    const navLinks = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/signin">Login</NavLink></li>
        <li><NavLink to="/signup">Register</NavLink></li>
        <li><NavLink to="/users">Students</NavLink></li>
        <li><NavLink to="/addAssignment">Add An Assignment</NavLink></li>
        {/* <li><NavLink to="/addCoffee">Add An Assignment</NavLink></li> */}
        {/* <li><NavLink to="/dhaka">Dhaka</NavLink></li>
        <li><NavLink to="/capetown">Cape Town</NavLink></li>
        <li><NavLink to="/london">London</NavLink></li>
        <li><NavLink to="/washingtondc">Washington D.C.</NavLink></li>
        <li><NavLink to="/brasilla">Brasilia</NavLink></li>
        <li><NavLink to="/canberra">Canberra</NavLink></li> */}
    </>


    return (
        <div className=" bg-orange-950">
            <div className="navbar text-yellow-300 max-w-6xl mx-auto">
            
            <div className="navbar-start">
                
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>

            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end" >
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 ">
                    <img src="https://i.ibb.co/nzYbBng/Screenshot-104.png" alt="" />
                    </div>
                </label>
                {/* {
                    user ? <button onClick={handleSignOut} className="btn">Sign Out</button> :
                        <Link to="/login">
                            <button className="btn">Login</button>
                        </Link>
                } */}

            </div>
        </div>
        </div>
    );
};

export default Navbar;