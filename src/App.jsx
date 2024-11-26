import React from 'react'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'

const App = () => {
  return (
    <main className=' relative min-h-screen w-screen overflow-x-hidden'>
      <HeroSection />
      <AboutSection />
    </main >
  )
}

export default App