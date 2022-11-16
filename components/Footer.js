import { FaTwitter, FaLinkedinIn, FaWhatsapp } from "react-icons/fa"
import { BsFillTelephoneFill } from "react-icons/bs"
import { SiGmail } from "react-icons/si"
import Link from "next/link"
import { IoLogoWhatsapp } from "react-icons/io"

const Footer = () => {
  return (
    <footer className="relative h-full text-gray-50 bottom-0 text-sm bg-indigo-600 w-full rounded-t-3xl p-4 font-semibold ">
      <div className="border border-gray-50"></div>
      <div className="flex space-x-4 my-4 text-lg text-center items-center place-content-center">
        <Link target="_blank" href="https://wa.me/2347068946708">
          <button className="home_social">
            <IoLogoWhatsapp className="flex mx-auto text-3xl" />
          </button>
        </Link>
        <Link target="_blank" href="https://www.linkedin.com/in/paul-ojo-86a840227/">
          <button className="home_social">
            <FaLinkedinIn className="flex mx-auto text-3xl" />
          </button>
        </Link>
        <Link target="_blank" href="mailto:ojopaul20200101@gmail.com">
          <button className="home_social">
            <SiGmail className="flex mx-auto text-3xl" />
          </button>
        </Link>
      </div>
      <div className="grid md:grid-cols-3 sm:ml-6 md:ml-20 mt-10 mb-4 sm:grid-cols-1 md:space-y-0 sm:space-y-5 ">
        <div className="flex flex-col">
          <h1 className="text-xl font-extrabold">Let's Talk!</h1>
          <p className="text-base font-semibold">Contact Info</p>
          <div className="text-xs space-y-1 flex flex-col">
            <Link target="_blank" href="mailto:ojopaul20200101@gmail.com">
              ojopaul20200101@gmail.com
            </Link>
          </div>
        </div>
        <div className="flex flex-col">
          <h1 className="font-extrabold text-xl">What I Do?</h1>
          <Link target="_blank" href="https://best-pics-app.netlify.app/">
            <button>Best-Pics Web App</button>
          </Link>
          <Link href="/#">
            <button>My Portfolio</button>
          </Link>
        </div>
        <div className="flex flex-col">
          <h1 className="font-extrabold text-xl">Menu</h1>
          <Link href="#home">Home</Link>
          <Link href="#about">About</Link>
          <Link href="#services">Services</Link>
          <Link href="#recent-works">Recent Works</Link>
        </div>
      </div>

      <div className="border border-gray-50 "></div>
    </footer>
  )
}

export default Footer
