import Image from "next/legacy/image"
import Layout from "../components/Layout"
import { MdFrontHand } from "react-icons/md"
import { FaLinkedinIn } from "react-icons/fa"
import { GoArrowRight } from "react-icons/go"
import { SiGmail } from "react-icons/si"
import Link from "next/link"
import { IoLogoWhatsapp } from "react-icons/io"
import RecentWork from "../components/RecentWork"
import RecentWorkData from "../components/RecentWork.json"
import { useState } from "react"

export default function Home() {
  const [showSocialMediaButton, setShowSocialMediaButton] = useState(false)
  return (
    <Layout>
      <div className="w-10/12 mx-auto font-semibold">
        <div className="grid md:grid-cols-2 md:m-10 md:ml-0 sm:grid-cols-1 justify-center mb-6">
          <div className="flex h-80 w-80 lg:h-[420px] lg:w-11/12 mt-6 rounded-lg hover:-rotate-3 transition-all duration-500 relative mx-auto">
            <Image
              src="/assets/images/paul-image.jpg"
              alt="paul"
              objectFit="cover"
              layout="fill"
              className="rounded-lg"
            />
          </div>
          <div className=" md:m-10 md:mr-0 sm:text-center md:text-left hover:animate-none h-full flex ">
            <div className="lg:mt-56 sm:mt-16 md:mt-32 mx-auto animate-bounce">
              <div className="inlne-flex font-semibold">
                Hey There <MdFrontHand className="-rotate-45 text-2xl inline-flex -mt-1 text-yellow-600" />
              </div>
              <h1 className=" font-extrabold text-3xl">Paul Ojo</h1>
              <p className="flex-wrap font-bold ">I am a professional Software Developer</p>
              <div className="space-x-8 inline-flex mt-4 relative">
                {showSocialMediaButton && (
                  <div
                    onMouseEnter={() => setShowSocialMediaButton(true)}
                    onMouseLeave={() => setShowSocialMediaButton(false)}
                    className="absolute bg-indigo-200 rounded-lg p-4  flex space-x-4 my-4 text-lg text-center items-center z-10 border-neutral-500 border -top-[150px]"
                  >
                    <div class="absolute -z-10 h-10 w-10 rotate-45 transform border border-neutral-500 border-l-0 border-t-0 -bottom-5 left-0 right-0 mx-auto bg-indigo-200"></div>

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
                )}
                <button
                  onClick={() => setShowSocialMediaButton(!showSocialMediaButton)}
                  target="_blank"
                  className="hireme_learnmore bg-indigo-600 ease-in-out focus:bg-indigo-400"
                >
                  Hire Me
                </button>

                <Link href="#about">
                  <button className="hireme_learnmore bg-gray-700 ease-in-out  active:bg-gray-400 ">Learn More</button>
                </Link>
              </div>
            </div>
          </div>
          {/* About me and Connect with me */}
          <div id="about" className="flex flex-col scroll-mt-24 md:m-10  md:ml-0 sm:grid-cols-1 sm:mb-6 mt-10 md:mt-20">
            <h1 className="font-extrabold text-lg md:text-2xl text-indigo-600 ">ABOUT ME</h1>
            <p className="flex flex-wrap md:mt-4 sm:mt-2 text-inherit">
              I am a passionate Fullstack Developer with strong background in backend and frontend development, skilled
              at implementing efficient, scalable, and reliable software solutions that meet the needs of users. I have
              a passion for solving complex problems and a commitment to staying up-to-date with the latest trends and
              technologies in the field.
              <p className="mt-5">
                My Tools Include: Nextjs | Reactjs | Node.js | Express.js | JavaScript | SQL | Postgresql | TailwindCSS
                | Socket.io | MongoDB | Formik | RTK-Query | Redux-Toolkit | Framer-Motion | CSS | APIs | HTML and
                more....
              </p>
            </p>
          </div>
          <div id="services" className="flex scroll-mt-24 flex-col mt-0 md:m-10 md:mr-0 sm:mb-6 md:mt-20">
            <h1 className=" font-extrabold text-lg md:text-2xl text-indigo-600 ">CONNECT WITH ME</h1>
            <div className=" md:mt-4 sm:mt-2">
              <p className="font-semibold">Here are some skills I pocess: </p>
              <ul className="list-disc ml-4">
                <li>High level of expertise in both frontend and backend web development</li>
                <li>
                  Extensive experience working with a variety of technologies and frameworks, and being able to quickly
                  learn and adapt to new ones as needed
                </li>
                <li>Strong problem-solving skills</li>
                <li>Able to design and implement complex, scalable web applications</li>
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
        <h1 className="font-extrabold flex justify-center mx-auto text-xl md:text-3xl mb-8 ">RECENT WORKS</h1>
        <div className="grid md:grid-cols-2 sm:grid-cols-1 mb-10 -mt-6 gap-6">
          {RecentWorkData.map((recentWorks) => (
            <div
              key={recentWorks.id}
              className=" active:scale-110 hover:scale-110 focus:m-0 ease-in-out transition-all duration-500 m-4"
            >
              <RecentWork
                id={recentWorks.id}
                link={recentWorks.link}
                image={recentWorks.image}
                label={recentWorks.label}
                github_link={recentWorks.github_link}
              />
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}
