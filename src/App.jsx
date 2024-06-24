import React, { useState } from 'react'
import Navbar from './Component/Navbar/Navbar'
import Hero from './Component/Hero/Hero'
import Program from './Component/Program/Program'
import Title from './Component/Title/Title'
import About from './Component/About/About'
import Campus from './Component/Campus/Campus'
import Slider from './Component/Slider/Slider'
import Contact from './Component/Contact/Contact'
import Footer from './Component/Footer/Footer'
import Videoplay from './Component/Videoplay/Videoplay'


// พิมพ์ rafce เพื่อสร้าง A 

const App = () => {

  const [playState, setPlayState] = useState(false);


  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
        <Title subtitle='Our PROGRAM' title='What We offer'/>
        <Program/>
        <About setPlayState={setPlayState}/>
        <Title subtitle='Gallery' title='Campus Photos'/>
        <Campus/>
        <Title subtitle='TESTIMONAIALS' title='What Student Says'/>
        <Slider/>
        <Title subtitle='Contact' title='Get the Toch'/>
        <Contact/>
        <Footer/>
      </div>
      <Videoplay playState={playState} setPlayState={setPlayState}/>
    </div>
  )
}

export default App