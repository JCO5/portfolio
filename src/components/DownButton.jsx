import React from 'react';
import { Link } from 'react-scroll';


const DownButton = ({activeSection}) => {
  

    return (
        <>
            <Link
            to="projects"
            className={activeSection === 'projects' ? 'active' : 'active fixed z-100 bottom-20 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-2 rounded cursor-pointer animate-pulse'}
            spy={true}
            smooth={true}
            duration={500}
          >
          down
          </Link>
        </>
    )
}

export default DownButton;
