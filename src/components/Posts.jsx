import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Loading from './Loading'

const Posts = ( {restBase, featuredImage} ) => {
    const restPath = restBase + ''
    const [restData, setData] = useState([])
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
            <>
                <h1>Blog</h1>
                {restData.map(post => 
                    <article key={post.id} id={`post-${post.id}`}>
                      
                        <Link to={`/projects/${post.slug}`}><h2>{post.acf.title}</h2></Link>
                        <img src={post.acf.project_thumbnail}></img>
                    </article>
                )}
            </>
        : 
            <Loading />
        }
        </>
    )
}

export default Posts
