import { Link, NavLink } from "react-router-dom";
import './NavBar.css'

const NavBar = () => {
    const navlinks = <>
        <NavLink className='text-[20px] font-extrabold hover:text-[#EEFF25]' to='/'>Home</NavLink>
        <NavLink className='text-[20px] font-extrabold hover:text-[#EEFF25]' to='contact'>Contact Us</NavLink>
        <NavLink className='text-[20px] font-extrabold hover:text-[#EEFF25]' to='dashboard'>Dashboard</NavLink>
        <NavLink className='text-[20px] font-extrabold hover:text-[#EEFF25]' to='our-menu'>Our Menu</NavLink>
        <NavLink className='text-[20px] font-extrabold hover:text-[#EEFF25]' to='our-shop/salad'>our shop</NavLink>
        <NavLink className='text-[20px] font-extrabold hover:text-[#EEFF25]' to='login'>Login</NavLink>
    </>

    return (
        <div className="bg-black fixed z-10 w-full bg-opacity-50 py-[20px]">
            <div className="navbar max-w-[1920px] mx-auto text-white px-[55px]">
                <div className="navbar-start w-[1/3]">
                    {/* dropdown */}
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navlinks}
                        </ul>
                    </div>
                    <Link>
                        <img src="https://i.ibb.co/v3sY95q/Group-1.png" alt="" />
                    </Link>
                </div>
                <div className="navbar-end hidden lg:flex w-full">
                    <ul className="menu menu-horizontal px-1 gap-6 uppercase">
                        {navlinks}
                    </ul>
                </div>
                {/* <div className="navbar-end">
                    <a className="btn">Button</a>
                </div> */}
            </div>
        </div>
    );
};

export default NavBar;