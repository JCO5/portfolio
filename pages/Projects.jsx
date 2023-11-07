import { useState, useEffect } from 'react'
import Loading from '../src/components/Loading'

const Projects = ( {restBase} ) => {
    const restPath = restBase + 'pages/34'
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
                    <h2 className="text"dangerouslySetInnerHTML={{ __html: restData.acf.intro_message }}></h2>
                    <p dangerouslySetInnerHTML={{ __html: restData.acf.intro_message_2 }}></p>
                </section>
                </div>
            </article>
        : 
            <Loading /> 
        }
        </>            
    )
}

export default Projects
