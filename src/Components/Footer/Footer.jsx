import React from 'react';
import './Footer.css'
import { FaSquareXTwitter, FaLinkedin, FaSquareFacebook, FaEnvelope } from "react-icons/fa6";

const Footer = () => {
    return (
        <section className='bg-black'>
            <div className='py-20 mt-20'>
                <div className='w-11/12 mx-auto grid grid-cols-1 md:grid-cols-5 gap-5 md:justify-items-end'>
                    <div>
                        <h3 className='text-[24px] font-bold text-white mb-4'>CS — Ticket System</h3>
                        <p className='text-[#A1A1AA] text-[14px] text-justify'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div>
                    <div>
                        <h3 className='text-[24px] font-bold text-white mb-4'>Company</h3>
                        <ul className='text-[#A1A1AA] text-[14px] navlinks space-y-1'>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Our Mission</a></li>
                            <li><a href="#">Contact Saled</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className='text-[24px] font-bold text-white mb-4'>Services</h3>
                        <ul className='text-[#A1A1AA] text-[14px] navlinks space-y-1'>
                            <li><a href="#">Products & Services</a></li>
                            <li><a href="#">Customer Stories</a></li>
                            <li><a href="#">Download Apps</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className='text-[24px] font-bold text-white mb-4'>Information</h3>
                        <ul className='text-[#A1A1AA] text-[14px] navlinks space-y-1'>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Terms & Conditions</a></li>
                            <li><a href="#">Join Us</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className='text-[24px] font-bold text-white mb-4'>Social Links</h3>
                        <ul className='text-[#A1A1AA] text-[14px] space-y-1 social-links'>
                            <li> <FaSquareXTwitter /> <a href="#">@CS — Ticket System</a></li>
                            <li> <FaLinkedin /> <a href="#">@CS — Ticket System</a></li>
                            <li> <FaSquareFacebook /> <a href="#">@CS — Ticket System</a></li>
                            <li> <FaEnvelope /> <a href="#">support@cst.com</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='w-11/12 mx-auto py-5 border-t-1 border-gray-600'>
                <p className='text-center text-[#FAFAFA] text-[12px] md:text-[14px]'>© 2025 CS — Ticket System. All rights reserved.</p>
            </div>
        </section>
    );
};

export default Footer;