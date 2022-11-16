import Image from "next/image"
import Layout from "../components/Layout"
import { MdFrontHand } from "react-icons/md"
import { FaLinkedinIn } from "react-icons/fa"
import { GoArrowRight } from "react-icons/go"
import { SiGmail } from "react-icons/si"
import Link from "next/link"
import { IoLogoWhatsapp } from "react-icons/io"

export default function Home() {
  return (
    <Layout>
      <div className="w-10/12 mx-auto font-semibold">
        <div className="grid md:grid-cols-2 md:m-10  md:ml-0 sm:grid-cols-1 justify-center mb-6">
          {/* Photo and Head */}
          <div className="flex h-80 w-80 lg:h-[420px] lg:w-11/12 mt-6 rounded-lg hover:-rotate-3 transition-all duration-500 relative mx-auto shadow-2xl ">
            <Image
              src="/assets/images/paul-image.jpg"
              alt="paul"
              objectFit="cover"
              layout="fill"
              className="rounded-lg"
            />
          </div>
          <div className="sm:mt-16 md:mt-32 lg:mt-56 md:m-10 md:mr-0 transition-all animate-bounce sm:text-center md:text-left hover:animate-none">
            <div className="inlne-flex font-semibold">
              Hey There <MdFrontHand className="-rotate-45 text-2xl inline-flex -mt-1 text-yellow-600" />
            </div>
            <h1 className=" font-extrabold text-3xl">Paul Ojo</h1>

            <p className="flex-wrap font-bold ">I am a professional Software Developer</p>

            <div className="space-x-8 inline-flex mt-4 ">
              <Link href="https://www.linkedin.com/in/paul-ojo-86a840227/">
                <button target="_blank" className="hireme_learnmore bg-indigo-600 ease-in-out focus:bg-indigo-400">
                  Hire Me
                </button>
              </Link>
              <Link href="#about">
                <button className="hireme_learnmore bg-gray-900 ease-in-out  active:bg-gray-600 ">Learn More</button>
              </Link>
            </div>
          </div>
          {/* About me and Connect with me */}
          <div id="about" className="flex flex-col scroll-mt-24 md:m-10  md:ml-0 sm:grid-cols-1 sm:mb-6 mt-10 md:mt-20">
            <h1 className="font-extrabold text-lg md:text-2xl text-indigo-600 ">ABOUT ME</h1>
            <p className="flex flex-wrap md:mt-4 sm:mt-2 text-inherit">
              I'm a passionate Software Developer with exceptional problem solving and analytical skills, proactive
              attitude and and build heristic solutions. I work with tools and frameworks like javascript, react, react
              native, css, tailwindcss, nodejs, socket.io, and lot more. These tools help in building outstanding
              websites and mobile apps.
            </p>
          </div>
          <div id="services" className="flex scroll-mt-24 flex-col mt-0 md:m-10 md:mr-0 sm:mb-6 md:mt-20">
            <h1 className=" font-extrabold text-lg md:text-2xl text-indigo-600 ">CONNECT WITH ME</h1>
            <div className=" md:mt-4 sm:mt-2">
              <p className="font-semibold">Do you need a website that is: </p>
              <ul className="list-disc ml-4">
                <li>Well Designed and functional</li>
                <li>Easy to use</li>
                <li>Optimized for mobile</li>
                <li>Fresh, Quality Content</li>
                <li>Clear calls to action</li>
                <li>Optimized for Search (SEO) and Social Web</li>
              </ul>
              <p>You can reach me here:</p>
              <div className="flex space-x-4 my-4 text-lg text-center items-center">
                <GoArrowRight className="text-5xl flex animate-pulse transition-all duration-150" />
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
            </div>
          </div>
        </div>
        <div id="recent-works" className="grid scroll-mt-24 grid-cols-1 text-center my-8">
          <h1 className="font-extrabold text-xl md:text-3xl ">RECENT WORKS</h1>
        </div>
        <div className="grid md:grid-cols-2 sm:grid-cols-1 mb-10 -mt-6">
          <Link target="_blank" href="https://best-pics-app.netlify.app/">
            <button className="space-y-6 m-8 active:scale-110 hover:scale-110 focus:m-0 ease-in-out transition-all duration-500">
              <Image
                src="/assets/images/Best-Pics.png"
                alt="big-c"
                height={380}
                width={800}
                objectFit="cover"
                className="rounded-md"
              />

              <h1 className="font-bold text-xl md:text-2xl"> Best-Pics App</h1>
            </button>
          </Link>
          <Link href="/#">
            <button className="space-y-6 m-8 active:scale-110 hover:scale-110 focus:m-0 ease-in-out transition-all duration-500">
              <Image
                src="/assets/images/my-portfolio-picture.png"
                alt="big-c"
                height={380}
                width={800}
                objectFit="cover"
                className="rounded-md"
              />
              <h1 className="font-bold text-xl md:text-2xl"> My Portfolio</h1>
            </button>
          </Link>
        </div>
      </div>
    </Layout>
  )
}
