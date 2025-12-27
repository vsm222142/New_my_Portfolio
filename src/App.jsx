
 import Navbar from './components/Navbar'

// import Home from './components/Home'
// import Skills from './components/Skills'
// import Projects from './components/Projects'
// import Contact from './components/Contact'
// import About from './components/About'
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react'

import { Outlet } from 'react-router-dom'
import ScrollToTop from './components/ScrollTo_Top';

function App() {

  useEffect(()=>{
    Aos.init()
  },[])
  
  return (
    <>
    <Navbar/>
    <ScrollToTop/>
     <Outlet/>
   {/* <Home/>
    <About/>
    <Skills/>
    <Projects/>
    <Contact/> */}
    
      
    </>
  )
}

export default App
