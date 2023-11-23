import { useState, useEffect } from 'react'
import Loading from '../components/Loading'
import SoundCloudPlayer from '../components/SoundcloudPlayer'

const About = () => {
    const restPath = 'https://joaquindev.ca/zlzkxclx/wp-json/wp/v2/pages/32?_embed&acf_format=standard'
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

    console.log('restData:', restData);

    
    return (
        <>
        { isLoaded ?
            <article className="pb-16 md:pb-0"id={`post-${restData.id}`}>
               <h1 className='flex justify-center py-8 text-[2rem]' >{restData.title.rendered}</h1>
                <div className="entry-content px-7">
                <section>
                    <article>
                        {/* I love making things */}
                        <p className='flex justify-center pb-2 '>{restData.acf.title}</p>
                        <SoundCloudPlayer/>
                        {/* Music Prod. */}
                        <p>{restData.acf.hobby_1_title}</p>
                        <hr className="bg-white h-1"></hr>
                    </article>
                    <article>
                        {/* Film and Digital Photog. */}
                        <p>{restData.acf.hobby_2_title}</p>
                        <hr className="bg-white h-1"></hr>
                    </article>
                    <article>
                        {/* Mixes and Remixes */}
                        <p>{restData.acf.hobby_3_title}</p>
                        <hr className="bg-white h-1"></hr>
                    </article>
                </section>
                </div>
            </article>
        : 
            <Loading /> 
        }
        </>            
    )
}

export default About
