import gsap from 'gsap/all'
import React, { useRef, useEffect } from 'react'
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger)

const AnimatedTitle = ({ title = 'This side', containerClass }) => {

    const ContainerRef = useRef(null)

    useEffect(() => {
        const Ctx = gsap.context(() => {
            const titleAnimation = gsap.timeline({
                scrollTrigger: {
                    trigger: ContainerRef.current,
                    start: "100 bottom",
                    end: "center bottom",
                    toggleActions: 'play none none reverse'
                }
            })

            titleAnimation.to('.animated-word', {
                opacity: 1,
                transform: 'translate3d(0,0,0) rotateY(0deg) rotateX(0deg)',
                ease: 'power1.in',
                stagger: 0.02,
            })
        }, [ContainerRef.current])
        return () => Ctx.revert()
    }, [])

    return (
        <div
            ref={ContainerRef}
            className={`my-5 px-5 text-center text-4xl uppercase md:text-[5rem] md:leading-[5.5rem] font-bold font-zentry special-font animated-title ${containerClass} `}>
            {
                title.split('<br />').map(
                    (line, index) => {
                        return <div key={index} className=" flex-center max-w-full gap-2 px-10 md:gap-3">{
                            line.split(' ').map(
                                (word, index) => {
                                    return <span key={index} className="animated-word" dangerouslySetInnerHTML={{ __html: word }} />
                                }
                            )
                        }</div>;
                    }
                )
            }
        </div>
    )
}

export default AnimatedTitle