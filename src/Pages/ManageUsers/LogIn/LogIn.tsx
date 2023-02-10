import React from 'react';
import { AiOutlineMail } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import { FcGoogle } from "react-icons/fc";
import { Link } from 'react-router-dom';
import './LogIn.css';
import Footer from '../../../components/Footer/Footer';

const LogIn = () => {
    return (
        <div className="mt-[100px]">
            <div className="mx-auto container flex items-center" id="nav">
                <div className="w-full pt-2 p-4">
                    <div className="mx-auto md:p-6 md:w-5/12">
                        <div className="bg-white shadow-xl rounded px-8 pt-6 pb-7 mb-4 border">
                            <div className="flex flex-wrap justify-center">
                                <h2 className="text-2xl font-medium shadow-md text-[#34526e] mt-1 transition duration-500 py-1.5 px-5 rounded uppercase">
                                    Log In
                                </h2>
                            </div>
                            <form className="mt-6">

                                <div className="mb-6">
                                    <div className="mt-1 relative rounded-md shadow-sm">
                                        <div className="absolute inset-y-0 right-0 pr-2 flex items-center pointer-events-none">
                                            <AiOutlineMail className="h-5 w-5 text-gray-400" />
                                        </div>
                                        <div className="flex items-center border-b border-gray-400 pl-0 pt-2 pb-1">
                                            <input className="appearance-none bg-transparent border-none w-full text-[#34526e] mr-3 py-1 px-2 leading-tight focus:outline-none text-base" type="text" placeholder="Email" aria-label="Full name" />
                                        </div>

                                    </div>
                                    {/* <strong className="text-red-500 text-xs italic">username is require</strong> */}
                                </div>

                                <div className="mb-6">
                                    <div className="mt-1 relative rounded-md shadow-sm">
                                        <div className="absolute inset-y-0 right-0 pr-2 flex items-center pointer-events-none">
                                            <RiLockPasswordLine className="h-5 w-5 text-gray-400" />
                                        </div>
                                        <div className="flex items-center border-b border-gray-400 pl-0 pt-2 pb-1">
                                            <input className="appearance-none bg-transparent border-none w-full text-[#34526e] mr-3 py-1 px-2 leading-tight focus:outline-none text-base" type="text" placeholder="Password" aria-label="Password" />
                                        </div>
                                    </div>
                                </div>

                                <div className="mb-6">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <label className="w-full flex items-center text-[#34526e] font-medium">
                                                <input className="ml-2 leading-tight" type="checkbox" id="remember" name="remember" />
                                                <span className="text-base ml-1">
                                                    Remember Me
                                                </span>
                                            </label>
                                        </div>
                                        <div>
                                            <a className="font-bold text-sm text-[#51DBDC] color-effect" href="#password-request">
                                                Forgot Password
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <div className="mb-4 text-center">
                                    <button className="transition duration-500 bg-[#34526e] login-btn-hover text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline uppercase" type="submit">
                                        Log In
                                    </button>
                                </div>
                                <div className="mt-5">
                                    <p className="text-sm text-center">
                                        Don't have an account? 
                                        <Link className="font-bold text-sm text-[#51DBDC] color-effect hover:text-orange-800 ml-1" to="/signup">
                                            Sign Up
                                        </Link>
                                    </p>
                                </div>
                                <div className="divider text-sm text-gray-400">OR</div>
                                <div className='w-9 h-9 bg-slate-200 mx-auto rounded-full flex items-center'>
                                    <FcGoogle className="w-7 h-7 mx-auto" />
                                </div>
                            </form>


                        </div>
                    </div>

                </div>
            </div>
            <Footer />
        </div>
    );
};

export default LogIn;