import React, { useState } from 'react';
import { RiMenu4Fill } from "react-icons/ri";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='bg-slate-100 text-fontColor font-Poppins flex flex-col md:flex-row justify-between items-center w-full px-6 py-4 shadow-lg'>
      {/* Logo Section */}
      <div className='text-fontColor font-Poppins font-semibold text-3xl md:text-4xl flex flex-row gap-2'>
        <h1><span className='text-Accent'>K</span>itc<span className='text-Accent'>h</span>en</h1>
        <h1>N<span className='text-Accent'>ee</span>ds</h1>
      </div>

      {/* Menu Icon for Mobile */}
      <div className='md:hidden mx-5 my-3'>
        <button onClick={toggleMenu} className='text-3xl'>
          <RiMenu4Fill />
        </button>
      </div>


      <ul className={`md:flex md:flex-row text-lg font-semibold gap-6 ${isMenuOpen ? 'flex flex-col items-center mt-4' : 'hidden'} md:mt-0 md:items-center md:space-x-6`}>
        <li className='cursor-pointer hover:text-Accent transition-colors'>Home</li>
        <li className='cursor-pointer hover:text-Accent transition-colors'>About Us</li>
        <li className='cursor-pointer hover:text-Accent transition-colors'>Services</li>
        <li className='cursor-pointer hover:text-Accent transition-colors'>Contact Us</li>
      </ul>
    </div>
  );
}

export default Navbar;
