import { Link } from 'react-router-dom';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";

function Socials() {
    return (
      <nav className="site-navigation flex flex-col justify-center gap-1">
      <ul className='flex justify-center items-center gap-3 flex-col md:flex-row md:justify-evenly'>
    <Link to='https://github.com/JCO5' ><FaGithub style={{color: "white"}} size={40}/></Link>
    <Link to='https://www.linkedin.com/in/joaquin-opulencia-09139b236/' ><FaLinkedin style={{color: "white"}} size={40}/></Link>
    <Link to='https://twitter.com/home' ><FaXTwitter style={{color: "white"}} size={40}/></Link>
</ul>

  </nav>
  )
}

export default Socials;