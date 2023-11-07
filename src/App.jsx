import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import { Link } from 'react-router-dom'
import Home from '../pages/Home'
import Posts from './components/Posts'
import Post from './components/Post'
import NavBar from './components/NavBar'
import Background from './components/Background'

function App() {
  
  const restBase = 'https://joaquindev.ca/zlzkxclx/wp-json/wp/v2/'
  
  const featuredImage = ( featuredImageObject ) => {
    let imgWidth = featuredImageObject.media_details.sizes.full.width;
    let imgHeight = featuredImageObject.media_details.sizes.full.height;
    let imgURL = featuredImageObject.source_url;
    let img = `<img src="${imgURL}" 
        width="${imgWidth}"
        height="${imgHeight}"
        alt="${featuredImageObject.alt_text}"
        srcset="${imgURL} ${imgWidth}w,
        ${featuredImageObject.media_details.sizes.large ? featuredImageObject.media_details.sizes.large.source_url + ' 1024w,' : ''}
        ${featuredImageObject.media_details.sizes.medium_large ? featuredImageObject.media_details.sizes.medium_large.source_url + ' 768w,' : ''}
        ${featuredImageObject.media_details.sizes.medium ? featuredImageObject.media_details.sizes.medium.source_url + ' 300w' : ''}"
        sizes="(max-width: ${imgWidth}) 100vw, ${imgWidth}px">`;
    return {__html: img}
  }

  const scrollToTop = () => {
    window.scrollTo({top: 0, behavior: "smooth"});
  };

  const scrollToSection = (sectionId) => {
      const section = document.getElementById(sectionId);
      if (section) {
          section.scrollIntoView({ behavior: "smooth" });
      }
  };

  return (
    <Router basename="/">
      <header id="masthead" className="site-header">
       <NavBar/>
      </header>
      <main id="main">
        <Routes>
          <Route path='/' element={<Home restBase={restBase} />} />
          <Route path='/blog' element={<Posts restBase={restBase} featuredImage={featuredImage} />} />
          <Route path='/blog/:slug' element={<Post restBase={restBase} />} />
        </Routes>
      <Background className="absolute z-1"/>
      </main>
    </Router>
  )
}

export default App