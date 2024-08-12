import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {

    const downloadCV = () => {
        const link = document.createElement('a');
        link.href = 'Farhan_CV.pdf'; // Ensure this path is correct
        link.download = 'My_CV.pdf'; // The file name to save as
        console.log("clicked");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    };

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };
    const navItems = [
        { id: 1, text: 'Home' },
        { id: 2, text: 'Projects' },
        { id: 3, text: 'Testimonials' },
    ];

    return (
        <div className='flex justify-between items-center h-24 max-w-full mx-auto px-4 shadow-[0_2px_10px_-1px_rgba(6,81,237,0.3)]'>
            {/* Logo */}
            <h1 className='w-full text-3xl font-bold text-[#00df9a]'>MEER AGENCY</h1>

            {/* Desktop Navigation */}
            <ul className='hidden md:flex'>
                {navItems.map((item, index) => (
                    <li
                        key={item.id}
                        className='p-3 hover:bg-[#00df9a] rounded-xl m-2 cursor-pointer duration-300 hover:text-black shadow-[2px_2px_10px_-2px_rgba(6,81,237,0.3)]'
                        onClick={() => scrollToSection(`section${index + 1}`)} // Add this line
                    >
                        {item.text}
                    </li>
                ))}
            </ul>

            {/* Download Button (Desktop) */}
            <div className='w-full md:flex md:items-end md:justify-end hidden'>
                <button
                    type="button"
                    onClick={downloadCV}
                    className='p-3 hover:bg-[#00df9a] rounded-xl cursor-pointer duration-300 shadow-[2px_2px_10px_-1px_rgba(6,81,237,0.3)] hover:text-black sm:text-sm'
                >
                    Download CV
                </button>
            </div>

            {/* Mobile Navigation Icon */}
            <div onClick={handleNav} className='block md:hidden'>
                {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
            </div>

            {/* Mobile Navigation Menu */}
            <ul
                className={
                    nav
                        ? 'fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] text-white ease-in-out duration-500 z-50'
                        : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%] z-50'
                }
            >
                <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>MEER</h1>

                {navItems.map((item, index) => (
                    <li
                        key={item.id}
                        className='p-4 border-b rounded-xl hover:bg-[#00df9a] duration-300 hover:text-black cursor-pointer border-gray-600'
                        onClick={() => {
                            scrollToSection(`section${index + 1}`);
                            handleNav(); // Close the menu after clicking
                        }} // Add this line
                    >
                        {item.text}
                    </li>
                ))}

                <li className='h-full'>
                    <button
                        type="button"
                        onClick={downloadCV}
                        className='w-full mt-52 h-fit p-4 border-b rounded-xl hover:bg-[#00df9a] duration-300 hover:text-black cursor-pointer border-gray-600 text-start'
                    >
                        Download CV
                    </button>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;
