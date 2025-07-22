import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import AnimatedTitle from "./Utility/AnimatedTitle";

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
    useGSAP(() => {
        const clipAnimation = gsap.timeline({
            scrollTrigger: {
                trigger: "#clip",
                start: "center center",
                end: "+=800 center",
                scrub: 0.5,
                pin: true,
                pinSpacing: true,
            },
        });

        clipAnimation.to(".mask-clip-path", {
            width: "100dvw",
            height: "100vh",
            borderRadius: 0,
        });
    });

    return (
        <div id="about" className="min-h-screen w-screen">
            <div className="relative mb-8 mt-36 flex flex-col items-center gap-5">
                <p className="font-general text-sm uppercase md:text-[10px]">
                    Welcome to Rajahmundry’s First Ever Futuristic Go Karting Arena
                </p>
                <AnimatedTitle title="Discovered the Rajahmundry's<br /> first racing advanture" containerClass={'mt-5 !text-black'} />
                <div className="about-subtext">
                    <p>The Game of Games begins—your life, now an epic MMORPG</p>
                    <p className="text-gray-500">
                        Go-Kart unites every player from countless games and platforms, both
                        drive and physical, into a unified Play Economy
                    </p>
                </div>
            </div>

            <div className="h-dvh min-w-screen" id="clip">
                <div className="mask-clip-path about-image">
                    <img
                        src="img/about.webp"
                        alt="Background"
                        className="absolute left-0 top-0 size-full object-cover"
                    />
                </div>
            </div>
        </div>
    );
};

export default AboutSection;