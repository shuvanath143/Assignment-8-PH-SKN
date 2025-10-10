import React from 'react';
import logo from "../../assets/logo.png"
import { CiFacebook, CiLinkedin } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";


const Footer = () => {
    return (
        <div className='bg-[#001931] text-white py-5 px-5'>
            <div className='flex justify-between items-center'>
                <div className='flex justify-between items-center'>
                    <img src={logo} alt="logo" className='h-5'/>
                    <span className='text-base font-semibold'>HERO.IO</span>
                </div>
                <div className='flex flex-col items-center'>
                    <h3>Social Links</h3>
                    <div className='flex justify-center items-center text-xl gap-3'>
                        <CiFacebook />
                        <CiLinkedin />
                        <FaWhatsapp />
                    </div>
                </div>
            </div>
            <p className='text-base text-[#fafafa] text-center'>Copyright © 2025 - All right reserved</p>
        </div>
    );
};

export default Footer;