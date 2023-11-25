import { useState, useEffect } from 'react'
import {Element} from 'react-scroll';
import Loading from '../components/Loading'
import DownButton from '../components/DownButton'
import Projects from './Projects'
import About from './About'
import NavBar from '../components/NavBar'; 
import Socials from '../components/Socials';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Initialize AOS with configurations
AOS.init();

const Home = () => {
    const restPath = 'https://joaquindev.ca/zlzkxclx/wp-json/wp/v2/pages/15?_embed&acf_format=standard'
    const [restData, setData] = useState(null)
    const [isLoaded, setLoadStatus] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(restPath)
            if ( response.ok ) {
                const data = await response.json()
                setData(data)
                setLoadStatus(true)
            } else {
                setLoadStatus(false)
            }
        }
        fetchData()
    }, [restPath])

 
    return (
        <>
        { isLoaded ?
            <div>
            <section className='h-screen-minus-40 px-7 md:px-0'>
              {/* Home Section */}
              <Element name="home" className="element home xl:px-40">
                <article className="relative z-5" id={`post-${restData.id}`}>
                <div className="flex flex-col md:flex-row md:pt-48">
                    {/* Column 1: Image */}
                    <div className="md:w-1/2">
                        <div className=" flex justify-center md:justify-start xl:justify-start">
                        <img
                            className="portrait w-48 mt-20 mb-10 rounded-full border-solid border-4  p-2 shadow-inner bg-grey-600 glow-image md:w-64"
                            src={restData.acf.portrait}
                            alt="Portrait of Me"
                        />
                        </div>
                    </div>

                    {/* Column 2: Text Content */}
                    <div className="flex justify-end items-center md:w-1/2">
                        
                        <div className='flex  flex-col'>
                            {/* Greetings */}
                            <span
                            className="title flex text-end justify-end sm:text-center md:text-end pb-2 sm:text-[2rem] md:text-[2rem] lg:text-[3rem] "
                            dangerouslySetInnerHTML={{ __html: restData.acf.intro_message }}
                            ></span>
                            {/* I'm a front end */}
                            <h2
                            className="me-paragraph pb-2  text-end"
                            dangerouslySetInnerHTML={{ __html: restData.acf.intro_message_2 }}
                            ></h2>
                            {/* based in Vancouver */}
                            <h2
                            className="pb-.5  text-end"
                            dangerouslySetInnerHTML={{ __html: restData.acf.intro_message_3 }}
                            ></h2>
                            <h2
                            className="pb-6  text-end"
                            dangerouslySetInnerHTML={{ __html: restData.acf.intro_message_4 }}
                            ></h2>

                        </div>
                    </div>
                    </div>
                    <Socials />
                </article>
              </Element>
            </section>
            <section>
              {/* Projects Section */}
              <Element data-aos="fade-up" name="projects" className="element projects toggleActive">
                <Projects />
              </Element>
            </section>
            <section>
              {/* About Section */}
              <Element data-aos="fade-up" name="about" className="element">
                <About />
              </Element>
            </section>
            
            {/* DOM elements */}
            <NavBar/>
            <DownButton />
          </div>
        : 
            <Loading /> 
        }
        </>            
    )
}

export default Home
