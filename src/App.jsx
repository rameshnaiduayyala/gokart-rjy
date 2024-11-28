import React from 'react'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <main className=' relative min-h-screen w-screen overflow-x-hidden'>
      <Navbar />
      <HeroSection />
      <AboutSection />
    </main >
  )
}

export default App