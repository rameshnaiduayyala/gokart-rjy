import React, { useState, useRef, useEffect } from 'react'
import CustomButton from './Utility/CustomButton';
import { TiLocationArrow } from 'react-icons/ti';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger)

const HeroSection = () => {

    const [currentIndex, setCurrentIndex] = useState(1)
    const [hasClicked, setHasClicked] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [loadedVd, setLoadedVd] = useState(0);

    const TotalVd = 4;

    const NextVideoRef = useRef(null)
    const UpcomingVd = (currentIndex % TotalVd) + 1

    const GetVideoPath = (index) => `/videos/hero-${index}.mp4`;

    const handleMiniClicked = () => {
        setHasClicked(true)
        setCurrentIndex(UpcomingVd)
    }
    const handleVideoLoad = () => {
        setLoadedVd((prev) => prev + 1)
    }

    useEffect(() => {
        if (loadedVd === TotalVd - 1) {
            setIsLoading(false)
        }
    }, [loadedVd])


    useGSAP(
        () => {
            if (hasClicked) {
                gsap.set('#next-video', { visibility: 'visible' })

                gsap.to(
                    '#next-video', {
                    transformOrigin: 'center center',
                    scale: 1,
                    duration: 0.8,
                    ease: 'power1.in',
                    onStart: () => NextVideoRef.current.play()
                })

                gsap.from(
                    '#current-video', {
                    transformOrigin: 'center center',
                    scale: 0.3,
                    borderRadius: '100dvh',
                    duration: 1.5,
                    ease: 'power1.inOut',
                })
            }
        }, { dependencies: [currentIndex], revertOnUpdate: true }
    )

    useGSAP(
        gsap.set('#video-frame', {
            clipPath: 'polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%)',
            borderRadius: '0 0 40% 10%',
        }),

        gsap.from('#video-frame', {
            clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
            borderRadius: '0 0 0% 0%',
            ease: 'power1.in',
            scrollTrigger: {
                trigger: '#video-frame',
                start: 'center 50%',
                end: 'bottom 40%',
                scrub: true,
            }
        })
    )

    return (
        <section className='relative h-dvh w-screen overflow-x-hidden'>
            {
                isLoading && (
                    <div className=" absolute z-[999] flex justify-center items-center h-[100dvh] w-screen bg-violet-200 overflow-hidden">
                        <div className="three-body">
                            <div className="three-body_dot" />
                            <div className="three-body_dot" />
                            <div className="three-body_dot" />
                        </div>
                    </div>
                )
            }
            <div id="video-frame" className=' relative h-dvh w-screen overflow-hidden rounded-lg bg-blue-500 z-10'>
                <div>
                    <div className="mask-clip-path absolute-center rounded-xl z-50 overflow-hidden cursor-pointer">
                        <div className='relative origin-center scale-50 opacity-0 transition-all duration-500 ease-in hover:scale-100 hover:opacity-100 overflow-hidden' onClick={handleMiniClicked}>
                            <video
                                id='next-video'
                                loop
                                ref={NextVideoRef}
                                src={GetVideoPath(UpcomingVd)}
                                muted
                                className='size-[28vh] scale-150 origin-center object-cover object-center'
                                onLoadedData={handleVideoLoad}
                            />
                        </div>
                    </div>
                    <video
                        id='current-video'
                        autoPlay
                        loop
                        ref={NextVideoRef}
                        src={GetVideoPath(currentIndex)}
                        muted
                        className='h-screen scale-150 origin-center object-cover object-center'
                        onLoadedData={handleVideoLoad}
                    />
                </div>

                <h1 className=' absolute font-zentry right-12 bottom-2 z-40 special-font hero-heading text-blue-75 overflow-hidden' >B<b>A</b>CK I<b>N</b>TO IT.</h1>

                <div className="mt-24 px-5 sm:px-[2vw] absolute left-0 top-0 z-40 size-full overflow-hidden">

                    <h1 className='special-font hero-heading text-blue-100'>Redefi<b>n</b>e</h1>

                    <p className='mb-5 max-w-[25rem] font-robert-regular text-blue-100'>
                        <p className='mb-5 font-robert-regular text-blue-100'>In the realm of gaming, a new era has dawned, where virtual worlds collide with reality, and the boundaries of imagination are pushed to the limit. With every click.</p>
                    </p>

                    <CustomButton id='game_on_CTAHeroBtn' containerClass='!bg-yellow-300' text='WATCH TRALIER' rigthIcon={<TiLocationArrow />} />
                </div>
            </div>

            <h1 className=' absolute font-zentry right-12 bottom-2 special-font hero-heading text-black overflow-hidden' >B<b>A</b>CK I<b>N</b>TO IT.</h1>

        </section>
    )
}

export default HeroSection