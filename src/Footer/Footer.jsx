import React from 'react';
import img1 from '../assets/fi_5969020.png';
import img2 from '../assets/fi_145807.png';
import img3 from '../assets/Group.png';
import img4 from '../assets/fi_6244710.png';
const Footer = () => {
    return (
        <div className='bg-black mt-[50px]'>
            <div className='flex flex-col md:flex-row bg-black pt-[80px] pb-[30px]  px-[10px] md:px-[80px] gap-11 text-center md:text-justify'>
                <div>
                    <h3 className='font-bold text-2xl text-[#fff]'>CS — Ticket System</h3>
                    <p className='mt-4 font-normal text-[16px] text-[#a1a1aa]'>A customer ticket is a record created when a user submits <br /> a request, issue, or question to a support system. <br />It helps track the customer’s problem from start to resolution <br /> in an organized way. <br /> Each ticket usually contains details like the customer’s name, <br />  contact info,and description of the issue.</p>
                </div>
                <div>
                    <h4 className='font-medium text-[20px] text-[#fff]'>Company</h4>
                    <h5 className='mt-[20px] mb-[20px] font-normal text-[16px] text-[#a1a1aa]'>About Us</h5>
                    <h5 className='mt-[20px] mb-[20px] font-normal text-[16px] text-[#a1a1aa]'>Our Mission</h5>
                    <h5 className='font-normal text-[16px] text-[#a1a1aa]'>Contact Saled</h5>
                </div>
                <div>
                    <h4 className='font-medium text-[20px] text-[#fff]'>Services</h4>
                    <h5 className='mt-[20px] mb-[20px] font-normal text-[16px] text-[#a1a1aa]'>Products & Services</h5>
                    <h5 className='mt-[20px] mb-[20px] font-normal text-[16px] text-[#a1a1aa]'>Customer Stories</h5>
                    <h5 className='font-normal text-[16px] text-[#a1a1aa]'>Download Apps</h5>
                </div>
                <div>
                    <h4 className='font-medium text-[20px] text-[#fff]'>Information</h4>
                    <h5 className='mt-[20px] mb-[20px] font-normal text-[16px] text-[#a1a1aa]'>Privacy Policy</h5>
                    <h5 className='mt-[20px] mb-[20px] font-normal text-[16px] text-[#a1a1aa]'>Terms & Conditions</h5>
                    <h5 className='font-normal text-[16px] text-[#a1a1aa]'>Join Us</h5>
                </div>
                <div>
                    <h4 className='font-medium text-[20px] text-[#fff]'>Social Links</h4>
                    <div className='flex gap-2 items-center mt-4 justify-center'>
                        <img className='w-[20px] h-[20px]' src={img1} alt="" />
                        <h5 className='font-normal text-[16px] text-[#a1a1aa]'>@CS — Ticket System</h5>
                    </div>
                    <div className='flex gap-2 mt-[20px] mb-[20px] items-center justify-center'>
                        <img className='w-[20px] h-[20px]' src={img2} alt="" />
                        <h5 className='font-normal text-[16px] text-[#a1a1aa]'>@CS — Ticket System</h5>
                    </div>
                    <div className='flex gap-2 mt-[20px] mb-[20px] items-center justify-center'>
                        <img className='w-[20px] h-[20px]' src={img3} alt="" />
                        <h5 className='font-normal text-[16px] text-[#a1a1aa]'>@CS — Ticket System</h5>
                    </div>
                    <div className='flex gap-2 items-center justify-center'>
                        <img className='w-[20px] h-[20px]' src={img4} alt="" />
                        <h5 className='font-normal text-[16px] text-[#a1a1aa]'>@CS — Ticket System</h5>
                    </div>
                </div>
            </div>
            <div className='border-t border-[#a1a1aa] py-5'>
                <h3 className='text-center font-normal text-[16px] text-[#fafafa]'>
                    © 2025 CS — Ticket System. All rights reserved.
                </h3>
            </div>

            
        </div>
    );
};

export default Footer;