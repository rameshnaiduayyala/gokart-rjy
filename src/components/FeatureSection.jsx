import { useRef, useState } from "react"
import { TiLocationArrow } from "react-icons/ti"

const BentoTilt = ({ children, className = '' }) => {

    const [TransformStyle, setTransformStyle] = useState('')
    const ItemRef = useRef()

    const handleMouseMove = (e) => {
        if (!ItemRef.current) return

        let { left, top, width, height } = ItemRef.current.getBoundingClientRect();

        let RelativeX = (e.clientX - left) / width;
        let RelativeY = (e.clientY - top) / height;

        let tiltX = (RelativeX - 0.5) * 30;
        let tiltY = (RelativeY - 0.5) * -30;

        setTransformStyle(`perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(.95,.95,.95)`)
    }
    const handleMouseLeave = () => { setTransformStyle('') }

    return (
        <div className={`bento-tilt ${className} `} ref={ItemRef} style={{ transform: TransformStyle }} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
            {children}
        </div >
    )
}

const BentoCard = ({ src, title, description, isComingSoon, containerClass }) => {
    return (
        <BentoTilt className={`relative size-full ${containerClass}`}>
            <video src={src} loop muted autoPlay className="size-full absolute top-0 right-0 object-cover object-left opacity-75" />
            <div className="relative z-[10] flex size-full flex-col justify-between p-5 text-blue-50">
                <div>
                    <h1 className="bento-title special-font">{title}</h1>
                    {
                        description && (
                            <p className="mt-3 max-w-[20rem] text-sm md:text-xs ">{description}</p>
                        )
                    }
                </div>
            </div>
        </BentoTilt>
    )
}

const FeatureSection = () => {
    return (
        <section className=' bg-black pb-[15rem]'>
            <div className="container mx-auto px-3 md:px-10">
                <div className="px-5 py-32">
                    <p className='font-circular-web text-lg text-blue-50 opacity-50'>Dive into the `Go Kart` Universe Immerse yourself in a rich and ever-expanding ecosystem where a vibrant array of products <b>converge into an interconnected universe Radiant </b></p>
                </div>
                <div className="relative mb-7 border-hsla h-96  md:h-[65vh] overflow-hidden rounded-md">
                    <BentoCard src={'/videos/feature-1.mp4'} title={'Radint'} description={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus iure magnam maiores itaque, eius impedit totam labore sint accusamus ratione non eligendi, tempore ullam nihil officiis amet corrupti sapiente unde.'} />
                </div>
                <div className="grid h-[150vh] grid-cols-2 grid-rows-3 gap-7">
                    <div className="bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2">
                        <BentoCard src={'/videos/feature-2.mp4'} title={'Zigma'} description={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus iure magnam'} />
                    </div>

                    <div className="bento-tilt_1 row-span-1 ms-32 md:col-span-1 md:ms-0">
                        <BentoCard src={'/videos/feature-3.mp4'} title={'Nesus'} description={'Lorem ipsum dolor sit amet consectetur adipisicing elit. '} />
                    </div>

                    <div className="bento-tilt_1 row-span-1 me-32 md:me-0 md:col-span-1 md:ms-0">
                        <BentoCard src={'/videos/feature-4.mp4'} title={'Azul'} description={'Lorem ipsum dolor sit amet consectetur adipisicing elit. '} />
                    </div>
                </div>
                <div className="bento-tilt_2 h-[30vh] flex gap-14 my-5">
                    <div className="flex size-full justify-between flex-col items-center bg-violet-300 p-5">
                        <h1 className="bento-title special-font">More coming soon!</h1>
                        <TiLocationArrow className="m-5 scale-[5] self-end" />
                    </div>
                    <BentoCard src={'/videos/feature-5.mp4'} containerClass={'h-[full]'} />
                </div>
            </div>
        </section>
    )
}

export default FeatureSection