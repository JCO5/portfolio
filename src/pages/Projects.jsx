import { useState, useEffect } from 'react'
import Loading from '../components/Loading'
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { useRef } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import {Link} from 'react-router-dom'

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

    const ref = useRef();
    
    return (
        <>
        { isLoaded ?
           <article className='m-4'>
            <h1>{restDataPage.title.rendered}</h1>
            {restDataPosts.map(post => 
                    <article key={post.id} id={`post-${post.id}`}>
                        <h2>{post.acf.title}</h2>
                        <Tabs>
                <TabList>
                    <Tab>Design</Tab>
                    <Tab>Development</Tab>
                    <Tab>Insights</Tab>
                </TabList>
                <TabPanel>
                <img src={post.acf.project_thumbnail.url}></img>
                </TabPanel>
                <TabPanel>
                    <h2>Content for Tab 2</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Content for Tab 3</h2>
                </TabPanel>
                </Tabs>
                    </article>
                )}
           </article>
        : 
            <Loading /> 
        }
        </>            
    )
}

export default Projects
