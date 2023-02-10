import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineMail } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import { FcGoogle } from "react-icons/fc";
import { HiOutlineUser } from "react-icons/hi";
import Footer from '../../../components/Footer/Footer';

const SignUp = () => {
    return (
        <div className="mt-[100px]">
            <div className="mx-auto container flex items-center" id="nav">
                <div className="w-full pt-2 p-4">
                    <div className="mx-auto md:p-6 md:w-5/12">
                        <div className="bg-white shadow-xl rounded px-8 pt-6 pb-7 mb-4 border">
                            <div className="flex flex-wrap justify-center">
                                <h2 className="text-2xl font-medium shadow-md text-[#34526e] mt-1 transition duration-500 py-1.5 px-5 rounded uppercase">
                                    Sign Up
                                </h2>
                            </div>

                            <form className="mt-6">

                                <div className="mb-6 user-email">
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

                                <div className="mb-6 user-name">
                                    <div className="mt-1 relative rounded-md shadow-sm">
                                        <div className="absolute inset-y-0 right-0 pr-2 flex items-center pointer-events-none">
                                            <HiOutlineUser className="h-5 w-5 text-gray-400" />
                                        </div>
                                        <div className="flex items-center border-b border-gray-400 pl-0 pt-2 pb-1">
                                            <input className="appearance-none bg-transparent border-none w-full text-[#34526e] mr-3 py-1 px-2 leading-tight focus:outline-none text-base" type="text" placeholder="Name" aria-label="Full name" />
                                        </div>

                                    </div>
                                    {/* <strong className="text-red-500 text-xs italic">username is require</strong> */}
                                </div>

                                <div className="mb-6 user-gender">
                                    <div className="mt-1 flex sm:items-center">
                                        <div className="w-1/5 flex justify-between">
                                            <span className="mr-1 px-2">Gender</span>
                                            
                                        </div>
                                        <div className="w-4/5 flex sm:items-center ml-5 sm:ml-0">
                                        <span className="mr-2">:</span>
                                            <div className="flex flex-col sm:flex-row sm:items-center">
                                            
                                                <label className="sm:mr-5">
                                                    <input type="radio" name="gender" /> Male
                                                </label>
                                                <label className="sm:mr-5">
                                                    <input type="radio" name="gender" /> Female
                                                </label>
                                                <label className="sm:mr-5">
                                                    <input type="radio" name="gender" /> Other
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="mb-6 user-photo">
                                    <div className="mt-1 flex items-center ">
                                        <div className="w-1/5 flex justify-between">
                                            <label className="text-sm font-medium text-gray-700 px-2">Photo</label>
                                            
                                        </div>
                                        <div className="w-4/5 flex items-center">
                                        <span className="mr-2">:</span>
                                            <span className="inline-block h-12 w-12 overflow-hidden rounded-full bg-gray-100">
                                                <svg className="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                                                </svg>
                                            </span>
                                            <button type="button" className="ml-5 rounded-md border border-gray-300 bg-white py-2 px-3 text-sm font-medium leading-4 text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none">Choose</button>
                                        </div>
                                    </div>
                                </div>

                                <div className="mb-6 user-password">
                                    <div className="mt-1 relative rounded-md shadow-sm">
                                        <div className="absolute inset-y-0 right-0 pr-2 flex items-center pointer-events-none">
                                            <RiLockPasswordLine className="h-5 w-5 text-gray-400" />
                                        </div>
                                        <div className="flex items-center border-b border-gray-400 pl-0 pt-2 pb-1">
                                            <input className="appearance-none bg-transparent border-none w-full text-[#34526e] mr-3 py-1 px-2 leading-tight focus:outline-none text-base" type="text" placeholder="Password" aria-label="Password" />
                                        </div>
                                    </div>
                                </div>

                                <div className="mb-6 forget-password">
                                    <div className="flex items-center justify-start">
                                        <div>
                                            <label className="text-[#34526e]">
                                                <input className="ml-2 leading-tight" type="checkbox" id="remember" name="remember" />
                                                <span className="text-base ml-1">
                                                    I agree to all <Link to="/" className="text-sky-600">Terms & Condition</Link>
                                                </span>
                                            </label>
                                        </div>
                                    </div>
                                </div>

                                <div className="mb-4 text-center signup-button">
                                    <button className="transition duration-500 bg-[#34526e] login-btn-hover text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline uppercase" type="submit">
                                        Sign Up
                                    </button>
                                </div>

                                <div className="mt-5 already-account">
                                    <p className="text-sm text-center">
                                        Already have an account?
                                        <Link className="font-bold text-sm text-[#51DBDC] color-effect hover:text-orange-800 ml-1" to="/signup">
                                            Log In
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

export default SignUp;