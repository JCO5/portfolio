import { useState, useEffect } from 'react'
import Loading from '../components/Loading'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const Projects = () => {
    const restPathPage =  'https://joaquindev.ca/zlzkxclx/wp-json/wp/v2/pages/34'
    const restPathPosts = 'https://joaquindev.ca/zlzkxclx/wp-json/wp/v2/posts/?_embed&acf_format=standard'
    const [restDataPage, setDataPage] = useState([])
    const [restDataPosts, setDataPosts] = useState([])
    const [isLoaded, setLoadStatus] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            const response_page = await fetch(restPathPage)
            const response_posts = await fetch(restPathPosts)
            if ( response_page.ok && response_posts.ok ) {
                const restDataPage = await response_page.json()
                const restDataPosts = await response_posts.json()
                setDataPage(restDataPage)
                setDataPosts(restDataPosts)
                setLoadStatus(true)
            } else {
                setLoadStatus(false)
            }
        }
        fetchData()
    }, [restPathPage, restPathPosts])


    console.log('restDataPage:', restDataPage);
    console.log('restDataPosts:', restDataPosts[0]);
    
    return (
        <>
        { isLoaded ?
        <section>
            <h1 className='flex justify-center py-8 text-[2rem]' >{restDataPage.title.rendered}</h1>
            <article className='grid grid-cols-1 gap-4 px-7 md:px-0 lg:px-10 lg:px-40 xl:px-40 xl:px-40'>
            {restDataPosts.map(post => (
              <div 
                key={post.id} 
                className='border-4 border-[#36A949] p-4 rounded-lg shadow-md bg-[#FFFDD0] text-black
                
                hover:transform hover:scale-105 transition-transform duration-300'>
                <h2 className='text-xl font-semibold mb-2 text-center'>{post.acf.title}</h2>
                <nav className='flex flex-row justify-evenly gap-1'>
                  <a className='underline' href={post.acf.live_site}>{post.acf.live_site_text}</a>
                  <a className='underline' href={post.acf.github}>{post.acf.github_text}</a>
                </nav>
                <div className='flex justify-center'>
                  <video className='p-2 glow-border'   src={post.acf.video} muted autoPlay controls loading="lazy"></video>
                </div>
                <Tabs>
                  <TabList >
                    <Tab>{post.acf.design_text}</Tab>
                    <Tab>{post.acf.development_text}</Tab>
                    <Tab>{post.acf.insights_text}</Tab>
                  </TabList>
                  {/* Design */}
                  <TabPanel>
                    <div dangerouslySetInnerHTML={{ __html: post.acf.design_description }}></div>
                  </TabPanel>
                  {/* Development */}
                  <TabPanel>
                    <div dangerouslySetInnerHTML={{ __html: post.acf.development_description }}></div>
                  </TabPanel>
                  {/* Insights */}
                  <TabPanel>
                    <div dangerouslySetInnerHTML={{ __html: post.acf.insights_description }}></div>
                  </TabPanel>
                </Tabs>
              </div>
            ))}
          </article>
          
        </section>
        : 
            <Loading /> 
        }
        </>            
    )
}

export default Projects
