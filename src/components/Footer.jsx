import { Link } from 'react-router-dom';
import React, { useState } from "react";
import { FaGithub } from "react-icons/fa";

function NavBar() {
  const [open, setOpen] = useState(false);

    return (
    <footer className='fixed bottom-0 left-0 w-full z-50 bg-black border-t border-gray-300 p-2'>
       <nav className="site-navigation flex justify-center space-x-4 md:fixed md:right-10 md:top-10 ">
          <ul className='flex justify-between gap-1 md:flex-col'>
          <Link className="text-white md:text-black" to='/' onClick={() => scrollToSection('projects-section')}><FaGithub /></Link>
          <Link className="text-white md:text-black" to='/' onClick={() => scrollToSection('about-section')}>About</Link>
          <Link className="text-white md:text-black" to='/' onClick={() => scrollToSection('connect-section')}>Connect</Link>
          </ul>
        </nav>
    </footer>
  )
}

export default NavBar;