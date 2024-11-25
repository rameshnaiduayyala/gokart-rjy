import React, { useState, useRef } from 'react'
import CustomButton from './Utility/CustomButton';

const HeroSection = () => {

    const [currentIndex, setCurrentIndex] = useState(1)
    const [hasClicked, setHasClicked] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [loadedVd, setLoadedVd] = useState(0);

    const TotalVd = 3;

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
    return (
        <section className='relative h-dvh w-screen overflow-x-hidden'>
            <div className=' relative h-dvh w-screen overflow-hidden rounded-lg bg-blue-75 z-10' id="video-frame">
                <div>
                    <div className="mask-clip-path absolute-center rounded-xl z-50 overflow-hidden cursor-pointer">
                        <div className='relative origin-center scale-50 opacity-0 transition-all duration-500 ease-in hover:scale-100 hover:opacity-100' onClick={handleMiniClicked}>
                            <video
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

                <h1 className=' absolute font-zentry right-12 bottom-2 special-font hero-heading text-blue-75 z-40' >B<b>A</b>CK I<b>N</b>TO IT.</h1>

                <div className="absolute left-0 top-0 z-40 size-full">
                    <h1 className='special-font hero-heading text-blue-100'>Redefi<b>n</b>e</h1>
                    <p className='mb-5 max-w-[20rem] font-robert-regular text-blue-100'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <CustomButton id='CTAHeroBtn' containerClass='' text='Enroll now'  />
                </div>
            </div>
        </section>
    )
}

export default HeroSection