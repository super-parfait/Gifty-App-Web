import React, { useState } from 'react';
import { Link, Outlet } from "react-router-dom";
// import { BsPersonFill } from 'react-icons/bs';
// import { ImSearch } from 'react-icons/im';
import { AiOutlineClose } from 'react-icons/ai';
import { ImMenu } from 'react-icons/im';
import { FaUserCircle } from 'react-icons/fa';
// import {
//   FaFacebook,
//   FaTwitter,
//   FaInstagram,
//   FaPinterest,
//   FaYoutube,
// } from 'react-icons/fa';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [logo, setLogo] = useState(false)
  const handleNav = () => {
    setNav(!nav);
    setLogo(!logo) 
  };

  return ( 
  <>
    <div className='flex w-full justify-between items-center h-20 px-4 absolute z-10 text-white'>
      <div>
        <h2 onClick={handleNav} className={logo ? 'hidden' : 'block'}><span className='font-black text-red-600'>GIFTY</span></h2>
      </div>
      {/* <ul className='hidden md:flex'>
        <li>Home</li>
        <li>Destinations</li>
        <li>Travel</li>
        <li>View</li>
        <li>Book</li>
      </ul> */}
      <div className='hidden md:flex '>
        {/* <ImSearch className='' size={20} /> 
        <BsPersonFill size={20} />*/}
        <Link to = "/login">
          <FaUserCircle size={30}  />
        </Link> 
        
      </div>

      {/* Hamburger */}
      <div onClick={handleNav} className='md:hidden z-10'>
        {nav ? <AiOutlineClose className='text-black' size={20} /> : <ImMenu size={20} />}
      </div>

      {/* Mobile menu dropdown */}
      <div onClick={handleNav} className={nav ? 'absolute text-black left-0 top-0 w-full bg-gray-100/90 px-4 py-7 flex flex-col' : 'absolute left-[-100%]'}>
        <ul>
          <h1><span className='font-black text-red-600'>GIFTY</span></h1> 
          <br /> <br /><br />
          {/* <li className='border-b'>Home</li>
          <li className='border-b'>Destinations</li>
          <li className='border-b'>Travel</li>
          <li className='border-b'>View</li>
          <li className='border-b'>Book</li> */}
          <div className='flex flex-col'>
            <Link to = "/">   
            <button className='my-6'>Rechercher</button>
            </Link>
            <Link to = "/login">
              <button>Connexion</button>
            </Link>
          </div>
          {/* <div className='flex justify-between my-6'>
            <FaFacebook className='icon' />
            <FaTwitter className='icon' />
            <FaYoutube className='icon' />
            <FaPinterest className='icon' />
            <FaInstagram className='icon' />
          </div> */}
        </ul>
      </div>
    </div> 
    <Outlet />
    </>
  );
};

export default Navbar;
