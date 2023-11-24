import { useState, useEffect } from 'react'
import Loading from '../components/Loading'
import SoundCloudPlayer from '../components/SoundcloudPlayer'
import RandomImage from '../components/RandomImage'
import YoutubeEmbed from '../components/YoutubeEmbed'
import Stack from '../components/Stack'
import CopyToClipboard from '../components/CopyToClipboard'
const About = () => {
    const restPath = 'https://joaquindev.ca/zlzkxclx/wp-json/wp/v2/pages/32?_embed&acf_format=standard'
    const [restData, setData] = useState(null)
    const [isLoaded, setLoadStatus] = useState(false)
    const emailAddress = "joaquinopulencia99@gmail.com"

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
            <article className="pb-16 md:pb-0"id={`post-${restData.id}`}>
               <h1 className='flex justify-center py-8 lg:text-[2rem] sm:text-[1.5rem]' >{restData.title.rendered}</h1>
               {/* I love making things */}
               <p className='flex justify-center pb-8 text-[1.5rem]'>{restData.acf.title}</p>
                <div className="entry-content  xl:px-40 xl:px-40">
                    <section className='flex justify-end flex-col'>
                        <article>
                            <SoundCloudPlayer/>
                            {/* Music Prod. */}
                            <p className='flex justify-end pt-2 pb-2 text-[1.5rem]'>{restData.acf.hobby_1_title}</p>
                            <p className='flex justify-end pb-2' >{restData.acf.hobby_1_description}</p>
                            <div className="flex justify-end">
                                <hr className="bg-white h-.5 w-6/12 mb-2"></hr>
                            </div>
                        </article>
                        <article>
                            <RandomImage/>
                            {/* Film and Digital Photog. */}
                            <p className='flex justify-end pt-2 pb-2 text-[1.5rem]'>{restData.acf.hobby_2_title}</p>
                            <p className='flex justify-end pb-2' >{restData.acf.hobby_2_description}</p>
                            <div className="flex justify-end">
                                <hr className="bg-white h-.5 w-6/12 mb-2"></hr>
                            </div>
                        </article>
                        <article>
                            <YoutubeEmbed/>
                            {/* Mixes and Remixes */}
                            <p className='flex justify-end pt-2 pb-2 text-[1.5rem]'>{restData.acf.hobby_3_title}</p>
                            <a className="flex justify-end pb-2 underline" href={restData.acf.youtube_channel_link}>{restData.acf.youtube_channel_text}</a>
                            <p className='flex justify-end pb-2' >{restData.acf.hobby_3_description}</p>
                            <div className="flex justify-end">
                                <hr className="bg-white h-.5 w-6/12"></hr>
                            </div>
                        </article>
                    </section>
                </div>
                <Stack/>
                <section>
                    <h1 className='flex justify-center py-8 text-[2rem]'>{restData.acf.contact_me_title}</h1>
                    <CopyToClipboard email={emailAddress}/>
                </section>
            </article>
        : 
            <Loading /> 
        }
        </>            
    )
}

export default About
