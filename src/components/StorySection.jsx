import React from 'react'
import AnimatedTitle from './Utility/AnimatedTitle'

const StorySection = () => {
    return (
        <section className='min-h-dvh w-screen bg-black text-blue-50' id='story'>
            <div className="flex size-full flex-col items-center py-10 pb-[5rem]">
                <p className="font-general m-auto text-sm uppercase md:text-[10px]">
                    The multiverse Ip World
                </p>
                <div className="relative sixe-full">
                    <AnimatedTitle title='The Story of a Hidden realm' />
                    <div className="story-img-container">
                        <div className="story-img-mask">
                            <div className="story-img-content">
                                <img src="/img/entrance.webp" alt="img" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default StorySection