import { useState, useEffect } from 'react'
import {Element} from 'react-scroll';
import Loading from '../components/Loading'
import DownButton from '../components/DownButton'
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

 
    return (
        <>
        { isLoaded ?
            <div>
            <section className='h-screen-minus-40 px-7 md:px-0'>
              {/* Home Section */}
              <Element name="home" className="element home">
                <article className="relative z-5" id={`post-${restData.id}`}>
                <div className="entry-content">
                            <div className='flex justify-center'>
                                <img
                                    className="w-48 rounded-full mt-20 border-solid border-4 border-white"
                                    src={restData.acf.portrait}
                                    alt="Portrait"
                                />
                            </div>
                            <div>
                                {/* Greetings */}
                                <h1 className="title text-center text-[2rem] pt-8 font-bold md:text-[#36A949] transition-all transform hover:translate-x-4 hover:text-[#F05A28] md:text-[4.5rem]" dangerouslySetInnerHTML={{ __html: restData.acf.intro_message }}></h1>
                            </div>
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
                                    <DownButton/>
                            </div>
                </div>
                </article>
              </Element>
            </section>
            <section>
              {/* Projects Section */}
              <Element name="projects" className="element projects toggleActive">
                <Projects />
              </Element>
            </section>
  
            <section>
              {/* About Section */}
              <Element name="about" className="element">
                <About />
              </Element>
            </section>
            <NavBar/>
          
          </div>
        : 
            <Loading /> 
        }
        </>            
    )
}

export default Home
