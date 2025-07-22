import { useEffect, useState } from "react";
import { useRef } from "react";
import CustomButton from "./Utility/CustomButton";
import { TiLocationArrow } from "react-icons/ti";
import { useWindowScroll } from "react-use";
import gsap from "gsap";

const Navbar = () => {
  const NavbarRef = useRef(null);
  const Navlinks = [
    "Home",
    "Our Karts",
    "our services",
    "pricing",
    "contact us",
  ];
  const AudioElementRef = useRef(null);
  const [isAudioPlaying, setIsAudioPlaying] = useState(true);
  const [isIndicatorActive, setIsIndicatorActive] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [IsNavVisible, setIsNavVisible] = useState(true);
  const { y: currentScrollY } = useWindowScroll();

  useEffect(() => {
    if (currentScrollY === 0) {
      setIsNavVisible(true);
      NavbarRef.current.classList.remove("floating-nav");
    } else if (currentScrollY > lastScrollY) {
      setIsNavVisible(false);
      NavbarRef.current.classList.add("floating-nav");
    } else if (currentScrollY < lastScrollY) {
      setIsNavVisible(true);
    }
    setLastScrollY(currentScrollY);
  }, [currentScrollY, lastScrollY]);

  useEffect(() => {
    gsap.to(NavbarRef.current, {
      y: IsNavVisible ? 0 : -150,
      opacity: IsNavVisible ? 1 : 0,
      duration: 0.5,
      ease: "linear",
    });
  }, [IsNavVisible]);

  const toggleAudioIndicator = () => {
    setIsAudioPlaying((prev) => !prev);
    setIsIndicatorActive((prev) => !prev);
  };

  useEffect(() => {
    if (isAudioPlaying) {
      AudioElementRef.current;
    }
  }, [isAudioPlaying]);

  return (
    <div
      className=" fixed m-2 z-50 flex justify-center items-center h-[6rem] border-none transition-none duration-700 w-full"
      ref={NavbarRef}
    >
      <header className=" absolute w-full flex justify-center items-center">
        <nav className="relative px-4 flex items-center justify-between size-full">
          <div className="relative flex items-center gap-4">
            <img src="/img/gokart-logo.png" alt="logo" className="h-20" />
          </div>
          <div className="navbar-left flex items-center flex-row">
            <div className="flex  h-full mr-4">
              <div className="hidden md:flex gap-2">
                {Navlinks.map((link, index) => (
                  <a key={index} href="#" className="nav-hover-btn hover">
                    {link}
                  </a>
                ))}
              </div>
            </div>
            <button
              type="button"
              className="flex items-center justify-center space-x-0.5"
              onClick={toggleAudioIndicator}
            >
              <CustomButton
                id="product-button"
                title="Products"
                rigthIcon={<TiLocationArrow />}
                containerClass={""}
                text="Book Now"
              />
              <audio
                src="/audio/loop.mp3"
                loop
                className=" bg-red-800"
                useRef={AudioElementRef}
              />
              {[1, 2, 3, 4].map((MusicBar) => (
                <div
                  className={`indicator-line text-white ${
                    isIndicatorActive ? "active" : ""
                  }`}
                  key={MusicBar}
                  style={{ animationDelay: `${MusicBar * 0.2}s` }}
                ></div>
              ))}
            </button>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
