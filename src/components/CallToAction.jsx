import CustomButton from "./Utility/CustomButton"

const ImageClipBox = ({ src, clipClass }) => (
    <div className={clipClass}>
        <img src={src} alt="img" />
    </div>
)

const CallToAction = () => {
    return (
        <section id='CTA' className=' my-20 min-h-96 w-screen px-10'>
            <div className="relative rounded-lg py-24 bg-black text-blue-50 sm:overflow-hidden">
                <div className="absolute -left-20 top-0 hidden h-full w-72 overflow-hidden sm:block lg:left-20 lg:w-96">
                    <ImageClipBox clipClass={'contact-clip-path-1'} src={'img/contact-1.webp'} />
                    <ImageClipBox clipClass={'contact-clip-path-1'} src={'img/contact-2.webp'} />
                </div>
                <div className=" absolute -top-40 left-20 w-60 sm:top-1/2 md:left-auto md:right-10 lg:top-20 lg:w-80">
                    <ImageClipBox src={'img/swordman-partial.webp'} clipClass={'absolute md:sclae-125'} />
                    <ImageClipBox src={'img/swordman.webp'} clipClass={'sword-man-clip-path md:scle-125'} />
                </div>
                <div className="flex flex-col items-center text-center">
                    <p className=" font-general text-[10px] uppercase">Join Zentry</p>
                    <p className=" special-font mt-10 w-full font-zentry text-6xl leading-tighter md:leading-[6rem]">
                        Let's B<b>u</b>ild the <br /> new <b>E</b>ra of <br /> G<b>a</b>ming T<b>o</b>gther
                    </p>
                    <CustomButton text="Contact US" containerClass={'mt-10 cursor-pointer'} />
                </div>
            </div>
        </section>
    )
}

export default CallToAction