import React from 'react';

const Navbar = () => {
    return (
        <div className="navbar max-w-[1300px] mx-auto bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 w-52 shadow">
                        <li><a>Home</a></li>
                        <li>
                            <a>FAQ</a>
                        </li>
                        <li><a>Changelog</a></li>
                        <li><a>Blog</a></li>
                        <li><a>Download</a></li>
                        <li><a>Contact</a></li>
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl -ms-5 md:-ms-3">CS — Ticket System</a>
            </div>
            <div className="navbar-end">
                <div className='hidden md:block'>
                <ul className='flex gap-4 font-light'>
                    <li><a href="#" className='font-light hover:font-semibold'>Home</a></li>
                    <li><a href="#" className='font-light hover:font-semibold'>FAQ</a></li>
                    <li><a href="#" className='font-light hover:font-semibold'>Changelog</a></li>
                    <li><a href="#" className='font-light hover:font-semibold'>Blog</a></li>
                    <li><a href="#" className='font-light hover:font-semibold'>Download</a></li>
                    <li><a href="#" className='font-light hover:font-semibold'>Contact</a></li>
                    </ul></div>
                <a className="btn ms-4  text-white bg-[linear-gradient(125deg,#632ee3_0%,#9f62f2_100%)] rounded-[4px]">+ New Ticket</a>
            </div>
        </div>
    );
};

export default Navbar;