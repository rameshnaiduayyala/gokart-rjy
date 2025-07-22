import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

const SocialLinks = [
  {
    id: 1,
    name: "Facebook",
    link: "https://www.facebook.com",
    icon: <FaFacebook />,
  },
  {
    id: 2,
    name: "Twitter",
    link: "https://www.twitter.com",
    icon: <FaTwitter />,
  },
  {
    id: 3,
    name: "Instagram",
    link: "https://www.instagram.com",
    icon: <FaInstagram />,
  },
  {
    id: 4,
    name: "LinkedIn",
    link: "https://www.linkedin.com",
    icon: <FaLinkedin />,
  },
  {
    id: 5,
    name: "GitHub",
    link: "https://www.github.com",
    icon: <FaGithub />,
  },
];

const Footer = () => {
  return (
    <footer className="w-screen bg-violet-300 py-4 text-black">
      <div className="container mx-auto flex justify-center flex-col items-center gap-2">
        <p className="text-center text-sm">
          Copyright &copy; Ramesh Ayyala 2025
        </p>
        <div className="flex justify-center md:justify-start items-center gap-4">
          {SocialLinks.map((link, index) => (
            <a href="" key={index}>
              {link.icon}
            </a>
          ))}
        </div>
        <div className="">
          <a href="">Private Privacy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
