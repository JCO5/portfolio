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
            <article id={`post-${restData.id}`}>
               <h1>{restData.title.rendered}</h1>
                <div className="entry-content">
                <section>
                    <article>

                        <SoundCloudPlayer/>
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
