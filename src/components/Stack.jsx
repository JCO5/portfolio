import { useState, useEffect } from 'react'
import Loading from './Loading'
import IsotopeFilter from './IsotopeFilter'
import {Element} from 'react-scroll';
const Stack = () => {
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
    
    return (
        <>
        { isLoaded ?
            <Element name="stack" className="element pb-16 "id={`post-${restData.id}`}>
               <h1 className='flex justify-center py-8 text-[2rem]'>{restData.acf.stack_title}</h1>
                <div className="entry-content xl:px-40 xl:px-40 ">
                   <IsotopeFilter/>
                </div>
                
            </Element>
        : 
            <Loading /> 
        }
        </>            
    )
}

export default Stack;
