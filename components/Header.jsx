import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { getCategories } from '../services';
import { FaLinkedin, FaTwitter } from 'react-icons/fa';
import { IoIosMail } from 'react-icons/io';

const Header = () => {
  const [categories, setCategories] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useRef(null);
  const mobileMenuRef = useRef(null);

  useEffect(() => {
    getCategories().then((newCategories) => {
      setCategories(newCategories);
    });

    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target)
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleCategoryClick = () => {
    setIsDropdownOpen(false);
    setIsMobileMenuOpen(false);
  };

  

  return (
    <nav className='bg-transparent border-gray-200 dark:bg-gray-900 dark:border-gray-700'>
    <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
      <Link href='/'>
        <a className='flex items-center space-x-3 rtl:space-x-reverse logo'>
          <Image src='/notebook.svg' alt='Logo' width={32} height={32} />
          <span className='self-center text-3xl font-semibold font-script whitespace-nowrap dark:text-accent1 text-accent1'>
            JuniorTheWriter
          </span>
        </a>
      </Link>
      <button
        type='button'
        className='inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-accent1 rounded-lg md:hidden hover:bg-dark5 focus:outline-none focus:ring-2 focus:ring-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
        aria-controls='navbar-dropdown'
        aria-expanded={isMobileMenuOpen ? 'true' : 'false'}
        onClick={toggleMobileMenu}
      >
        <span className='sr-only'>Open main menu</span>
        <svg
          className='w-5 h-5'
          aria-hidden='true'
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 17 14'
        >
          <path
            stroke='currentColor'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M1 1h15M1 7h15M1 13h15'
          />
        </svg>
      </button>
      <div
        ref={mobileMenuRef}
        className={`${
          isMobileMenuOpen ? 'block' : 'hidden'
        } w-full md:flex md:items-center md:w-auto`}
        id='navbar-dropdown'
      >
        <ul className='flex flex-col md:flex-row md:items-center font-medium p-4 md:p-0 mt-4 md:mt-0 border md:border-0 border-gray-500 rounded-lg md:rounded-none dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700' style={{gap: '1rem'}}>
          <li>
            <Link href='/about'>
              <a
                className='block py-2 px-3 text-white bg-dark3 rounded md:bg-transparent md:text-accent1 md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent'
                aria-current='page'
              >
                About Me
              </a>
            </Link>
          </li>
          <li className='relative'>
            <button
              onClick={toggleDropdown}
              className='flex items-center justify-between w-full py-2 px-3 text-text2 rounded hover:text-accent1 md:hover:bg-transparent md:border-0 md:hover:text-accent1 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent'
            >
              Categories
              <svg
                className='w-2.5 h-2.5 ml-2.5'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 10 6'
              >
                <path
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='m1 1 4 4 4-4'
                />
              </svg>
            </button>
            <div
              ref={dropdownRef}
              className={`${
                isDropdownOpen ? 'block' : 'hidden'
              } absolute mt-2 w-48 rounded-md shadow-lg bg-dark5 ring-1 ring-black ring-opacity-5`}
              style={{ zIndex: 10 }}
            >
              <ul className='py-1 text-sm text-gray-400'>
                {categories.map((category, index) => (
                  <li key={index} onClick={handleCategoryClick}>
                    <Link href={`/category/${category.slug}`}>
                      <a className='block px-4 py-2 hover:bg-gray-700 hover:text-white'>
                        {category.name}
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            </li>

          <li className='flex flex-row items-center space-x-4 mt-4 md:mt-0 ' >
          
          
            <IoIosMail onClick={() =>(window.location.href = 'mailto:juniorthedeveloper@gmail.com')}
              className='text-2xl  social-container'
              color='var(--text2)'
              />
             

                
            <a
              href='https://www.linkedin.com/in/junioradessu/'
              target='_blank'
              rel='noopener noreferrer'
              className='flex items-center social-container'
              >
              <FaLinkedin className='text-2xl text-text2'  />
            </a>
             

              
            <a
              href='https://x.com/juniorthedeveloper'
              target='_blank'
              rel='noopener noreferrer'
              className='flex items-center social-container'
            >
              <FaTwitter className='text-2xl text-text2' />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  );
};

export default Header;
