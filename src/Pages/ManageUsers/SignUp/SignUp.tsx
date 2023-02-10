import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineMail } from "react-icons/ai";
import { HiOutlineUser } from "react-icons/hi";

const SignUp = () => {
    return (
        <div className="mt-[80px]">
            <div className="mx-auto container flex items-center" id="nav">
                <div className="w-full pt-2 p-4">
                    <div className="mx-auto md:p-6 md:w-1/2">
                        <div className="bg-white shadow-xl rounded px-8 pt-6 pb-8 mb-4">
                            <div className="flex flex-wrap justify-center">
                                <h2 className="text-2xl font-medium bg-[#34526e] text-white hover:text-orange-500 transition duration-500 py-1.5 px-5 rounded uppercase">
                                    Sign Up
                                </h2>
                            </div>
                            <form>
                                <div className="mb-5">
                                    <div className="mt-1 relative rounded-md shadow-sm">
                                        {/* <input id="username" className="block pl-9 shadow appearance-none border-2 border-[#51DBDC] rounded w-full py-2 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-orange-500 transition duration-500 ease-in-out" placeholder="Name" /> */}
                                        <div className="absolute inset-y-0 right-0 pr-2 flex items-center pointer-events-none">
                                            {/* <svg className="h-5 w-5 text-gray-400" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg> */}
                                            <HiOutlineUser className="h-5 w-5 text-gray-400" />
                                        </div>
                                        <div className="flex items-center border-b border-gray-400 pl-0 pt-2 pb-1">
                                            <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none text-base" type="text" placeholder="Full Name" aria-label="Full name" />
                                        </div>

                                    </div>
                                    {/* <strong className="text-red-500 text-xs italic">username is require</strong> */}
                                </div>

                                <div className="mb-8">
                                    {/* <label for="username" className="block text-gray-700 text-sm font-bold mb-2">
                                        Username
                                    </label> */}
                                    <div className="mt-1 relative rounded-md shadow-sm">
                                        {/* <input id="username" className="block pl-9 shadow appearance-none border-2 border-[#51DBDC] rounded w-full py-2 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-orange-500 transition duration-500 ease-in-out" placeholder="Name" /> */}
                                        <div className="absolute inset-y-0 right-0 pr-2 flex items-center pointer-events-none">
                                            <AiOutlineMail className="h-5 w-5 text-gray-400" />
                                        </div>
                                        <div className="flex items-center border-b border-gray-400 pl-0 pt-2 pb-1">
                                            <input className="appearance-none bg-transparent border-none w-full text-[#34526e] mr-3 py-1 px-2 leading-tight focus:outline-none text-base" type="text" placeholder="Email" aria-label="Full name" />
                                        </div>

                                    </div>
                                    {/* <strong className="text-red-500 text-xs italic">username is require</strong> */}
                                </div>

                                <div className="mb-8">
                                    <label className="block text-gray-700 text-sm font-bold mb-2">
                                        <span className="text-red-500">&nbsp;*</span>
                                        Password
                                    </label>
                                    <div className="mt-1 relative rounded-md shadow-sm">
                                        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                            <svg className="h-5 w-5 text-gray-400" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
                                        </div>
                                        <input name="password" id="password" type="text" className="block pr-10 shadow appearance-none border-2 border-orange-100 rounded w-full py-2 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-orange-500 transition duration-500 ease-in-out" />
                                    </div>
                                </div>

                                <div className="mb-6">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <label className="block text-gray-500 font-bold" >
                                                <input className="ml-2 leading-tight" type="checkbox" id="remember" name="remember" />
                                                <span className="text-sm">
                                                    remember me
                                                </span>
                                            </label>
                                        </div>
                                        <div>
                                            <a className="font-bold text-sm text-orange-500 hover:text-orange-800" href="#password-request">
                                                forgot password
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <div className="mb-4 text-center">
                                    <button className="transition duration-500 bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                                        Login
                                    </button>
                                </div>
                                <hr />
                                <div className="mt-8">
                                    <p className="text-sm">
                                        no account
                                        <Link className="font-bold text-sm text-orange-500 hover:text-orange-800" to="/signup">
                                            sign up
                                        </Link>
                                    </p>
                                </div>
                            </form>


                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default SignUp;