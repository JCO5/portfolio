import { Link } from 'react-router-dom';
import React, { useState } from "react";
import { FaGithub } from "react-icons/fa";

function Socials() {
  const [open, setOpen] = useState(false);

    return (
       <nav className="site-navigation flex col justify-center space-x-4">
          <ul className='flex justify-between gap-1 md:flex-col'>
          <Link className="text-white md:text-black" to='/' onClick={() => scrollToSection('projects-section')}><FaGithub /></Link>
          <Link className="text-white md:text-black" to='/' onClick={() => scrollToSection('about-section')}>About</Link>
          <Link className="text-white md:text-black" to='/' onClick={() => scrollToSection('connect-section')}>Connect</Link>
          </ul>
        </nav>
  )
}

export default Socials;