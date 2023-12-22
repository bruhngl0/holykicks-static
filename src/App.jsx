import React from 'react'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import Footer from './components/Footer'

import './styles/hero.scss'
import './styles/services.scss'
import './styles/about.scss'
import './styles/footer.scss'




function App() {
  return (  
    <>     
      <Hero />
      <Services />
      <About />
      <Footer />
      
    </>

  )
}

export default App
