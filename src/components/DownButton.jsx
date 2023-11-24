import React from 'react';
import { Link } from 'react-scroll';
import { FaChevronDown } from "react-icons/fa6";

const DownButton = ({activeSection}) => {
    return (
        <>
            <Link
            to="projects"
            className={activeSection === 'projects' ? 'active' : 'active absolute z-100 bottom-20 left-1/2 transform -translate-x-1/2 text-[#36A949]  px-4 py-2 rounded cursor-pointer animate-pulse'}
            spy={true}
            smooth={true}
            duration={500}
          >
          <FaChevronDown size={60} />
          </Link>
        </>
    )
}

export default DownButton;
