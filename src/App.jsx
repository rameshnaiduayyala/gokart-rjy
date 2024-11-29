import React from 'react'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import Navbar from './components/Navbar'
import FeatureSection from './components/FeatureSection'
import StorySection from './components/StorySection'
import CallToAction from './components/CallToAction'
import Footer from './components/Footer'

const App = () => {
  return (
    <main className=' relative min-h-screen w-screen overflow-x-hidden'>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <FeatureSection />
      <StorySection />
      <CallToAction />
      <Footer />
    </main >
  )
}

export default App