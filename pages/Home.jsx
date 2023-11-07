import { useState, useEffect } from 'react'
import Loading from '../src/components/Loading'

const Home = ( {restBase} ) => {
    const restPath = restBase + 'pages/15'
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
            <article className='relative z-5' id={`post-${restData.id}`}>
               <h1 className='flex justify-center'>{restData.title.rendered}</h1>
                <div className="entry-content">
                <section>
                    <h2 className="flex justify-start"dangerouslySetInnerHTML={{ __html: restData.acf.intro_message }}></h2>
                    <p className="flex justify-center "dangerouslySetInnerHTML={{ __html: restData.acf.intro_message_2 }}></p>
                </section>
                </div>
            </article>
        : 
            <Loading /> 
        }
        </>            
    )
}

export default Home
