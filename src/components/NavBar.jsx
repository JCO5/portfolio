
import { Link } from 'react-scroll';
import React, { useState } from "react";
// Import React Icons
import { GoHome } from "react-icons/go";
import { GoPerson } from "react-icons/go";
import { RiBox3Line } from "react-icons/ri";

function NavBar({activeSection}) {
  const [open, setOpen] = useState(false);

    return (
    <header className='fixed bottom-0 left-0 w-full z-50 bg-black border-gray-300 p-2 md:bg-none'>
       <nav className="site-navigation space-x-4 md:fixed md:right-10 md:top-10 ">
          <ul className='flex justify-evenly gap-1 md:flex-col md:justify-evenly'>
          <Link
            to="home"
            className={activeSection === 'home' ? 'active text-white md:text-black' : ''}
            spy={true}
            smooth={true}
            duration={500}
          >
          <GoHome size={40} />
          </Link>
          <Link
            to="projects"
            className={activeSection === 'projects' ? 'active text-white md:text-black' : ''}
            spy={true}
            smooth={true}
            duration={500}
          >
          <RiBox3Line size={40} />
          </Link>
          <Link
            to="about"
            className={activeSection === 'about' ? 'active text-white md:text-black' : ''}
            spy={true}
            smooth={true}
            duration={500}
          >
          <GoPerson size={40} />
          </Link>
          </ul>
        </nav>
    </header>
  )
}

export default NavBar;