import { Link } from 'react-router-dom';
import React, { useState } from "react";

function NavBar() {
  const [open, setOpen] = useState(false);

    return (
    <header className='fixed bottom-0 left-0 w-full z-50 bg-black border-t border-gray-300 p-2'>
       <nav className="site-navigation flex justify-center space-x-4 md:fixed md:right-0 md:top-0">
          <ul className='flex justify-between gap-1'>
          <Link className="text-white" to='/' onClick={() => scrollToSection('projects-section')}>Projects</Link>
          <Link className="text-white" to='/' onClick={() => scrollToSection('about-section')}>About</Link>
          <Link className="text-white" to='/' onClick={() => scrollToSection('connect-section')}>Connect</Link>
          </ul>
        </nav>
    </header>
  )
}

export default NavBar;