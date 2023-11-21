import { useState, useEffect } from 'react'
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import { useRef } from 'react';
import { motion } from 'framer-motion'
import Loading from '../components/Loading'
import Projects from './Projects'
import About from './About'
import NavBar from '../components/NavBar'; 
import CustomCursor from '../components/CustomCursor';
import NowPlaying from '../components/NowPlaying';
import Socials from '../components/Socials';

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

    // For Section Clicking on Nav
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        scrollSpy.update();
        Events.scrollEvent.register('begin', (to, element) => {
          setActiveSection(element.id);
        });
    
        return () => {
          Events.scrollEvent.remove('begin');
        };
      }, []);
    
    return (
        <>
        { isLoaded ?
            <div>
            <section className='h-screen-minus-40 px-7'>
              {/* Home Section */}
              <Element name="home" className="element home">
                <article className="relative z-5" id={`post-${restData.id}`}>
                <div className="entry-content">
                        <section>
                        <div className='flex justify-center'>
                            <img
                                className="w-48 rounded-full mt-20 border-solid border-4 border-white"
                                src={restData.acf.portrait}
                                alt="Portrait"
                            />
                            </div>
                            {/* Greetings */}
                            <h1 className="title flex justify-start text-[1.75rem] pt-8 font-bold md:text-green-600 transition-all transform hover:translate-x-4 hover:text-orange-500 md:text-[4.5rem]" dangerouslySetInnerHTML={{ __html: restData.acf.intro_message }}></h1>
                            <div className='py-8 md:hidden'>
                                <NowPlaying/>
                            </div>
                            <CustomCursor/>
                            <div className='grid grid-cols-[2fr,1fr]'>
                                <div>
                                    <p dangerouslySetInnerHTML={{ __html: restData.acf.intro_message_2 }}></p>
                                </div>
        
                                <div className='md:hidden'>
                                    <Socials/>
                                </div>
                                  {/* NowPlaying in the Second Column for screens 768px and above */}
                                <div className='hidden md:block'>
                                    <NowPlaying/>
                                </div>
                        </div>


                        </section>
                </div>
                </article>
              </Element>
            </section>
            <section>
              {/* Projects Section */}
              <Element name="projects" className="element projects">
                <Projects />
              </Element>
            </section>
  
            <section>
              {/* About Section */}
              <Element name="about" className="element">
                <About />
              </Element>
            </section>
  
             {/* Pass activeSection to NavBar */}
            <NavBar activeSection={activeSection} />
          </div>
        : 
            <Loading /> 
        }
        </>            
    )
}

export default Home
