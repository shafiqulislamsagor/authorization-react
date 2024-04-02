import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { ContextCreate } from "./AuthProvider";
import toast from "react-hot-toast";

const Navber = () => {
    const contextInfo = useContext(ContextCreate)
    const {user,logOut} = contextInfo
    const logOutBtn = () =>{
        logOut()
        .then(()=>{
            toast.success('Successfully , Your Account is Logout')
        })
        .catch(error=>{
            toast.error(error.message)
        })
    }

    const nav = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/login'>Log-In</NavLink></li>
        <li><NavLink to='/register'>Register</NavLink></li>
        <li><NavLink to='/orders'>Order</NavLink></li>
    </>

    const logInNav = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/orders'>Order</NavLink></li>
    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {user ? logInNav : nav}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">daisyUI</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-4">
                {user ? logInNav : nav}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user? <Link onClick={logOutBtn} className="btn">LogOut</Link> : <Link to='/register' className="btn">SignUp</Link>
                }
            </div>
        </div>
    );
};

export default Navber;