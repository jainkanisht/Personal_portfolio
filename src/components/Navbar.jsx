import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className='flex flex-wrap justify-between items-center text-white px-4 md:px-10 py-4 bg-blue-900 sticky top-0 left-0'>
      {/* Logo */}
      <a href="#" className='text-xl font-bold tracking-wide'>Portfolio</a>

      {/* Hamburger Menu Button (Mobile Only) */}
      <button
        className='md:hidden p-2 focus:outline-none cursor-pointer'
        onClick={toggleMenu}
      >
        {/* Hamburger Icon (when menu is closed) */}
        {!isMenuOpen && (
          <svg
            className='w-6 h-6'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M4 6h16M4 12h16m-7 6h7'
            />
          </svg>
        )}

        {/* Cross Icon (when menu is open) */}
        {isMenuOpen && (
          <svg
            className='w-6 h-6'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M6 18L18 6M6 6l12 12'
            />
          </svg>
        )}
      </button>

      {/* Navigation Links (Desktop) */}
      <ul className='hidden md:flex gap-x-4 mx-4 font-semibold transition-all duration-300 border-none'>
        <li><a href='#about' className='hover:text-blue-500'>About</a></li>
        <li><a href='#experience' className='hover:text-blue-500'>Experience</a></li>
        <li><a href='#projects' className='hover:text-blue-500'>Projects</a></li>
        <li><a href='#contacts' className='hover:text-blue-500'>Contacts</a></li>
      </ul>

      {/* Mobile Menu (Slides Down) */}
      {isMenuOpen && (
        <div className='w-full md:hidden mt-4 transition-all duration-300'>
          <ul className='flex flex-col gap-y-2 font-semibold'>
            <li><a href='#about' className='hover:text-blue-500'>About</a></li>
            <li><a href='#experience' className='hover:text-blue-500'>Experience</a></li>
            <li><a href='#projects' className='hover:text-blue-500'>Projects</a></li>
            <li><a href='#contacts' className='hover:text-blue-500'>Contacts</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;