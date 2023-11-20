
import { Link } from 'react-scroll';

import React, { useState } from "react";

function NavBar({activeSection}) {
  const [open, setOpen] = useState(false);

    return (
    <header className='fixed bottom-0 left-0 w-full z-50 bg-black border-gray-300 p-2 md:bg-transparent'>
       <nav className="site-navigation flex justify-center space-x-4 md:fixed md:right-10 md:top-10 ">
          <ul className='flex justify-between gap-1 md:flex-col'>
          <Link
            to="home"
            className={activeSection === 'home' ? 'active text-white md:text-black' : ''}
            spy={true}
            smooth={true}
            duration={500}
          >
            Home
          </Link>
          <Link
            to="projects"
            className={activeSection === 'projects' ? 'active text-white md:text-black' : ''}
            spy={true}
            smooth={true}
            duration={500}
          >
            Projects
          </Link>
          <Link
            to="about"
            className={activeSection === 'about' ? 'active text-white md:text-black' : ''}
            spy={true}
            smooth={true}
            duration={500}
          >
            About
          </Link>
          </ul>
        </nav>
    </header>
  )
}

export default NavBar;