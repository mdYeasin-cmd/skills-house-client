import React from 'react';
import logo from './../../assets/Logo/logo.png';
import './Footer.css';
import { BsFacebook, BsLinkedin, BsTwitter } from "react-icons/bs";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <footer>
                <div className="footer p-10 xl:py-12 bg-base-200 text-[#34526e] xl:px-16">
                    <div>
                        <img src={logo} className="w-32 mx-auto sm:mx-0" alt="" />
                        <div className="footer-text-container text-center sm:text-left">
                            <p className="text-base font-semibold">Skills House</p>
                            <p className="footer-subtext">Providing reliable services since 2015</p>
                        </div>
                        <div className="flex justify-center sm:justify-start w-full">
                            <Link to="/" className="w-7 h-7 rounded-full flex justify-center items-center text-sm text-white bg-[#34526e] mr-2 text-center">
                                <BsLinkedin />
                            </Link>
                            <Link to="/" className="w-7 h-7 rounded-full flex justify-center items-center text-sm text-white bg-[#34526e] mr-2 text-center">
                                <BsTwitter />
                            </Link>
                            <Link to="/" className="w-7 h-7 rounded-full flex justify-center items-center text-sm text-white bg-[#34526e] mr-2 text-center">
                                <BsFacebook />
                            </Link>
                        </div>
                    </div>
                    <div className="flex flex-col items-center sm:items-start">
                        <span className="footer-title">Services</span>
                        <Link className="link link-hover" to="/">Branding</Link>
                        <Link className="link link-hover" to="/">Design</Link>
                        <Link className="link link-hover" to="/">Marketing</Link>
                        <Link className="link link-hover" to="/">Advertisement</Link>
                    </div>
                    <div className="flex flex-col items-center sm:items-start">
                        <span className="footer-title">Company</span>
                        <Link className="link link-hover" to="/">About us</Link>
                        <Link className="link link-hover" to="/">Contact</Link>
                        <Link className="link link-hover" to="/">Jobs</Link>
                        <Link className="link link-hover" to="/">Press kit</Link>
                    </div>
                    <div className="flex flex-col items-center sm:items-start">
                        <span className="footer-title">Legal</span>
                        <Link className="link link-hover" to="/">Terms of use</Link>
                        <Link className="link link-hover" to="/">Privacy policy</Link>
                        <Link className="link link-hover" to="/">Cookie policy</Link>
                    </div>
                </div>
                <p className="text-center py-2 text-sm bg-base-300">Copyright © 2023 - All right reserved by Skills House</p>
            </footer>
        </div>
    );
};

export default Footer;