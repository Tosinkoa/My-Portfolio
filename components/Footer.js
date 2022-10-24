import { FaTwitter, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="relative h-full text-gray-50 bottom-0 text-sm bg-indigo-600 w-full rounded-t-3xl p-4 font-semibold ">
      <div className="border border-gray-50"></div>
      <div className="grid md:grid-cols-3 sm:ml-6 md:ml-20 mt-10 mb-4 sm:grid-cols-1 md:space-y-0 sm:space-y-5 ">
        <div className="flex flex-col">
          <h1 className="text-xl font-extrabold">Let's Talk!</h1>
          <p className="text-base font-semibold">Contact Info</p>
          <div className="text-xs space-y-1 flex flex-col">
            <Link href="mailto:ojopaul20200101@gmail.com">ojopaul20200101@gmail.com</Link>
          </div>
        </div>
        <div className="flex flex-col">
          <h1 className="font-extrabold md:text-lg sm:text-sm">What I Do?</h1>
          <Link href="https://remarkable-tarsier-329022.netlify.app/">
            <a target="_blank">Best-Pics Web App</a>
          </Link>
          <Link href="https://astonishing-pithivier-df8ad1.netlify.app/">
            <a target="_blank">Info Web App</a>
          </Link>
          <Link href="https://bright-swan-1e4748.netlify.app/">
            <a target="_blank">Best-Pics Web App</a>
          </Link>
          <Link href="/#">
            <a>My Portfolio</a>
          </Link>
        </div>
        <div className="flex flex-col">
          <h1 className="font-extrabold md:text-lg sm:text-sm">Menu</h1>
          <Link href="#home">Home</Link>
          <Link href="#about">About</Link>
          <Link href="#services">Services</Link>
          <Link href="#recent-works">Recent Works</Link>
        </div>
      </div>

      <div className="border border-gray-50 "></div>

      <div className="flex text-gray-800 justify-center space-x-4 my-4 text-lg text-center mb-8 mt-5">
        <Link href="https://www.linkedin.com/in/paul-ojo-86a840227/">
          <a target="_blank" className="footer_social">
            <FaLinkedinIn />
          </a>
        </Link>
        <Link href="mailto:ojopaul20200101@gmail.com">
          <a target="_blank" className="footer_social">
            <SiGmail />
          </a>
        </Link>
      </div>
      <div className="text-xs text-center ">
        <p>All rights reserved by © PaulOjo 2022</p>
      </div>
    </footer>
  );
};

export default Footer;
