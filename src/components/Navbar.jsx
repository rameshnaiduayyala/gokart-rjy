import React from 'react'
import { useRef } from 'react'
import CustomButton from './Utility/CustomButton'
import { TiLocationArrow } from 'react-icons/ti'

const Navbar = () => {
    const NavbarRef = useRef(null)
    const Navlinks = ['Nexus', 'vault', 'prologue', 'about', 'contact']
    const AudioElementRef = useRef(null)

    const toggleAudioRef = () => { }
    return (
        <div className=' fixed top-10 z-50 h-16 border-none transition-none duration-700 w-full' ref={NavbarRef}>
            <header className=' absolute w-full -translate-y-1/2'>
                <nav className='relative p-4 flex items-center justify-between size-full'>
                    <div className="relative flex items-center gap-4">
                        <img src="/img/logo.png" alt="logo" className='h-10' />
                        <CustomButton id='product-button' title='Products' rigthIcon={<TiLocationArrow />} containerClass={''} />
                    </div>
                    <div className="flex h-full items-center">
                        <div className="hidden md:flex gap-2">
                            {
                                Navlinks.map((link, index) => (
                                    <a key={index} href="#" className="nav-hover-btn hover">{link}</a>
                                ))
                            }
                        </div>
                    </div>
                    <button type="button" className='flex items-center justify-center space-x-0.5' useRef={AudioElementRef}>
                        <audio src="/audio/loop.mp3"></audio>
                    </button>
                </nav>
            </header>
        </div>
    )
}

export default Navbar