import { Link, NavLink } from "react-router-dom";
import defaultUser from "../../../assets/user.png";
import { useContext } from "react";
import { AuthContext } from "../../../ContextProvider/ContextProvider";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const links = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/career">Career</NavLink></li>
    </>
    const userLogOut = () => {
        logOut()
            .then(() => {
                alert('Are you sure you want to log out?')
            })
            .catch(error => console.error(error));
    }
    return (
        <div className="navbar bg-base-100 py-4 md:py-0">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {links}
                    </ul>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end pr-4 lg:pr-0">
                <img className="w-10 h-auto mr-2" src={defaultUser} alt="" />
                {
                    user ?
                        <button onClick={userLogOut} className="bg-[#403f3f] text-white font-semibold px-9 hover:bg-[black] py-2 duration-100">Log out</button>
                        :
                        <Link to="/register">
                            <button className="bg-[#403f3f] text-white font-semibold px-9 hover:bg-[black] py-2 duration-100">Register</button>
                        </Link>
                }
            </div>
        </div>
    );
};

export default Navbar;