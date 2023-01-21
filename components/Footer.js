import Link from "next/link"
import { FaLinkedinIn } from "react-icons/fa"
import { IoLogoWhatsapp } from "react-icons/io"
import { SiGmail } from "react-icons/si"

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
          <div className="text-xs space-y-1 flex flex-col">
            <Link target="_blank" href="mailto:ojopaul20200101@gmail.com">
              ojopaul20200101@gmail.com
            </Link>
          </div>
        </div>
        <div className="flex flex-col">
          <h1 className="font-bold text-xl">What I Do?</h1>
          <Link target="_blank" href="https://best-pics-app.netlify.app/">
            <button className="font-light md:font-normal">Best-Pics Web App</button>
          </Link>
          <Link target="_blank" href="https://advertisement-campaign.netlify.app/">
            <button className="font-light md:font-normal">Advert App For Nodejs Server</button>
          </Link>
          <Link target="_blank" href="https://advert-frontend-for-php-backend.netlify.app/">
            <button className="font-light md:font-normal">Advert App For PHP Server</button>
          </Link>
          <Link href="/#">
            <button className="font-light md:font-normal">My Portfolio</button>
          </Link>
        </div>
        <div className="flex flex-col">
          <h1 className="font-bold text-xl">Menu</h1>
          <Link href="#home" className="font-light md:font-normal" passHref>
            Home
          </Link>
          <Link href="#about" className="font-light md:font-normal" passHref>
            About
          </Link>
          <Link href="#services" className="font-light md:font-normal" passHref>
            Services
          </Link>
          <Link href="#recent-works" className="font-light md:font-normal" passHref>
            Recent Works
          </Link>
        </div>
      </div>

      <div className="border border-gray-50 "></div>
    </footer>
  )
}

export default Footer
