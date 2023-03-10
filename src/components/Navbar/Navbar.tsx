import React, { useState, useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext, AuthContextType } from '../../contexts/AuthProvider';
import logo from './../../assets/Logo/logo.png';
import './Navbar.css';
import toast from 'react-hot-toast';

const Navbar = () => {

    const [active, setActive] = useState(false);
    const { user, logOut } = useContext(AuthContext) as AuthContextType;

    console.log(user);

    const activeNavItem = () => {

        return ({ isActive }: { isActive: boolean }): string | undefined => isActive ?
            'nav-item-active' :
            'nav-item';

    }

    const handleLogOut = () => {
        logOut()
            .then(() => {
                toast.success('Log Out successfully from your account');
            })
            .catch(error => console.log(error));
    }

    return (
        <div className="">

            {/* Navbar */}
            <nav className="flex justify-between shadow-lg text-[#34526e] fixed top-0 left-0 right-0 bg-white min-h-[80px] z-30">
                <div className="px-5 xl:px-12 py-2 flex w-full items-center">
                    {/* Logo Here */}
                    <Link className="flex items-center text-xl sm:text-3xl font-bold font-heading" to="/">
                        <img className="h-11 sm:h-16" src={logo} alt="logo" />
                        <h1 className="ml-[-35px] sm:ml-[-55px] font-semibold">Skills House</h1>
                    </Link>
                    {/* Nav Links */}
                    <ul className="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12">
                        <li><NavLink className={activeNavItem()} to="/">Home</NavLink></li>
                        <li><NavLink className={activeNavItem()} to="/courses">Courses</NavLink></li>
                        <li><NavLink className={activeNavItem()} to="/blog">Blog</NavLink></li>
                        <li><NavLink className={activeNavItem()} to="/contact">Contact</NavLink></li>
                    </ul>
                    {/* Header Icons */}
                    <div className="hidden xl:flex items-center space-x-5">
                        {
                            user ?
                                <>
                                    <Link className="nav-icon" to="/">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                        </svg>
                                    </Link>
                                    <Link className="flex items-center nav-icon" to="/">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                        </svg>
                                        <span className="flex absolute -mt-5 ml-4">
                                            <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75"></span>
                                            <span className="relative inline-flex rounded-full h-3 w-3 bg-pink-500">
                                            </span>
                                        </span>
                                    </Link>
                                    {/* Sign In / Register */}
                                    <Link className="flex items-center nav-icon" to="/">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 nav-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>

                                    </Link>
                                    <button onClick={handleLogOut} className="bg-[#34526e] text-white px-3 py-2 rounded font-medium uppercase">LogOut</button>

                                </> :
                                <Link to="/login">
                                    <button className="bg-[#34526e] text-white px-3 py-2 rounded font-medium uppercase">LogIn</button>
                                </Link>
                        }

                    </div>
                </div>


                {/* Responsive navbar */}
                <Link className="xl:hidden flex mr-6 items-center" to="/">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hover:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <span className="flex absolute -mt-5 ml-4">
                        <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-pink-500">
                        </span>
                    </span>
                </Link>
                <div className="self-center mr-5 xl:hidden">
                    {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hover:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg> */}
                    <div onClick={() => setActive(!active)}>
                        <div className={`${active ? 'activeHamburger' : 'hamburger'
                            }`}></div>
                    </div>

                </div>
            </nav>

            <div className={active ? 'active-side-nav' : 'side-nav'}>
                <ul className="px-4 mx-auto font-semibold font-heading side-nav-ul">
                    <li><NavLink className="" to="/">Home</NavLink></li>
                    <li><NavLink className="" to="/courses">Courses</NavLink></li>
                    <li><NavLink className="" to="/blog">Blog</NavLink></li>
                    <li><NavLink className="" to="/contact">Contact</NavLink></li>
                </ul>
            </div>

        </div>
    );
};

export default Navbar;