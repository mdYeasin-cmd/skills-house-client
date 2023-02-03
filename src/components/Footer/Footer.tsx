import React from 'react';
import logo from './../../assets/Logo/logo.png';

const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-base-200 text-base-content xl:px-16">
                <div>
                    <img src={logo} className="w-32" alt="" />
                    <p className="text-base font-semibold">Skills House</p>
                    <p>Providing reliable services since 2015</p>
                </div>
                <div>
                    <span className="footer-title">Services</span>
                    <a className="link link-hover" href="/">Branding</a>
                    <a className="link link-hover" href="/">Design</a>
                    <a className="link link-hover" href="/">Marketing</a>
                    <a className="link link-hover" href="/">Advertisement</a>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <a className="link link-hover" href="/">About us</a>
                    <a className="link link-hover" href="/">Contact</a>
                    <a className="link link-hover" href="/">Jobs</a>
                    <a className="link link-hover" href="/">Press kit</a>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <a className="link link-hover" href="/">Terms of use</a>
                    <a className="link link-hover" href="/">Privacy policy</a>
                    <a className="link link-hover" href="/">Cookie policy</a>
                </div>
            </footer>
        </div>
    );
};

export default Footer;