import React, { useState } from 'react'
import Header from './components/Header'
import Home from './components/Home'
import Work from './components/Work'
import Timeline from './components/Timeline'
import Services from './components/Services'
import Testmonial from './components/Testmonial'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { MyNav } from './components/Header'

import { Toaster } from 'react-hot-toast'


const App = () => {
 
  const [menuopen,setMenuopen] = useState(false)


  return (

   <>

    <MyNav menuOpen={menuopen} setMenuopen={setMenuopen} />
      <Header menuOpen ={menuopen} setMenuopen={setMenuopen}/>
     
      <Home/>
      <Work/>
      <Timeline/>
      <Services/>
      <Testmonial/>
      <Contact/>
      <Footer/>
      <Toaster/>
   </>
      
  )
}

export default App
