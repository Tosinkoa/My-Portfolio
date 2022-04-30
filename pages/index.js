import Image from "next/image";
import Layout from "../components/Layout";
import { MdFrontHand } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";
import { GoArrowRight } from "react-icons/go";
import { SiGmail } from "react-icons/si";
import Link from "next/link";

export default function Home() {
  return (
    <Layout>
      <div className="w-10/12 mx-auto">
        <div className="grid md:grid-cols-2 md:m-10  md:ml-0 sm:grid-cols-1 justify-center mb-6">
          {/* Photo and Head */}
          <Image
            src="/assets/images/Paulliano.jpg"
            alt="paul"
            height={410}
            width={560}
            objectFit="cover"
            className="rounded-lg"
          />
          <div className="sm:mt-16 md:mt-32 md:m-10 md:mr-0  animate-bounce sm:text-center md:text-left ">
            <div className="inlne-flex">
              Hey There <MdFrontHand className="-rotate-45 text-2xl inline-flex -mt-1 text-yellow-600" />
            </div>
            <h1 className="font-my-font font-extrabold text-3xl">Paul Ojo</h1>

            <p className="flex-wrap font-bold font-my-font">I am a professional Software Developer</p>

            <div className="space-x-8 inline-flex mt-4">
              <Link href="https://www.linkedin.com/in/paul-ojo-86a840227/">
                <a
                  target="_blank"
                  className="hireme_learnmore bg-indigo-600 transition-colors duration-300 ease-in-out active:bg-indigo-400"
                >
                  Hire Me
                </a>
              </Link>
              <Link href="#about">
                <a className="hireme_learnmore bg-gray-900 transition-colors duration-300 ease-in-out  active:bg-gray-600">
                  Learn More
                </a>
              </Link>
            </div>
          </div>
          {/* About me and Connect with me */}
          <div id="about" className="flex flex-col scroll-mt-24 md:m-10  md:ml-0 sm:grid-cols-1 sm:mb-6 md:mt-20">
            <h1 className="font-extrabold text-sm text-indigo-600">ABOUT ME</h1>
            <p className="flex flex-wrap text-gray-600  md:mt-4 sm:mt-2">
              I'm a passionate Software Developer, am in possession of exceptional problem-solving and analytical
              skills, proactive attitude with high time management skill qualities.
            </p>
          </div>
          <div id="services" className="flex scroll-mt-24 flex-col mt-0 md:m-10 md:mr-0 sm:mb-6 md:mt-20">
            <h1 className="font-my-font font-bold text-lg">Connect with me</h1>
            <div className="text-gray-600 md:mt-4 sm:mt-2">
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
              <div className="flex space-x-4 my-4 text-lg text-center">
                <GoArrowRight className="text-3xl flex" />
                <Link href="https://www.linkedin.com/in/paul-ojo-86a840227/">
                  <a target="_blank" className="home_social">
                    <FaLinkedinIn />
                  </a>
                </Link>
                <Link href="mailto:ojopaul20200101@gmail.com">
                  <a className="home_social">
                    <SiGmail />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div id="recent-works" className="grid scroll-mt-24 grid-cols-1 text-center my-8">
          <p className="text-indigo-600 font-semibold">Creative Portfolios</p>
          <h1 className="text-2xl font-bold">Recent Works</h1>
        </div>
        <div className="grid md:grid-cols-2 sm:grid-cols-1 mb-10">
          <Link href="https://ivana-event.netlify.app">
            <a
              target="_blank"
              className="space-y-4 m-8 active:m-0 hover:m-0 focus:m-0 ease-in-out transition-all duration-500"
            >
              <Image
                src="/assets/images/Event-login.png"
                alt="big-c"
                height={380}
                width={800}
                objectFit="cover"
                className="rounded-md"
              />
              <div>
                <h1 className="font-bold"> Event-App</h1>
                <p className="text-xs font-semibold text-gray-600">A website for creating events</p>
              </div>
            </a>
          </Link>
          <Link href="https://best-pics-app.netlify.app//">
            <a
              target="_blank"
              className="space-y-4 m-8 active:m-0 hover:m-0 focus:m-0 ease-in-out transition-all duration-500"
            >
              <Image
                src="/assets/images/Best-Pics.png"
                alt="big-c"
                height={380}
                width={800}
                objectFit="cover"
                className="rounded-md"
              />
              <div>
                <h1 className="font-bold"> Best-Pics Web App</h1>
                <p className="text-xs font-semibold text-gray-600">A website for viewing and downloading pictures</p>
              </div>
            </a>
          </Link>
          <Link href="https://info-web-app.netlify.app">
            <a
              target="_blank"
              className="space-y-4 m-8 active:m-0 hover:m-0 focus:m-0 ease-in-out transition-all duration-500"
            >
              <Image
                src="/assets/images/info-web-pics.png"
                alt="big-c"
                height={380}
                width={800}
                objectFit="cover"
                className="rounded-md"
              />
              <div>
                <h1 className="font-bold"> Info Web App</h1>
                <p className="text-xs font-semibold text-gray-600">A website for persisting users information</p>
              </div>
            </a>
          </Link>
          <Link href="https://big-c.netlify.app">
            <a
              target="_blank"
              className="space-y-4 m-8 active:m-0 hover:m-0 focus:m-0 ease-in-out transition-all duration-500"
            >
              <Image
                src="/assets/images/big-c-pics.png"
                alt="big-c"
                height={380}
                width={800}
                objectFit="cover"
                className="rounded-md"
              />
              <div>
                <h1 className="font-bold"> Big-C Web App</h1>
                <p className="text-xs font-semibold text-gray-600">A website for buying and selling cars</p>
                <h1 className="font-bold text-teal-600">Still in progress...</h1>
              </div>
            </a>
          </Link>
          <Link href="/#">
            <a className="space-y-4 m-8 active:m-0 hover:m-0 focus:m-0 ease-in-out transition-all duration-500">
              <Image
                src="/assets/images/portfolio-pics.png"
                alt="big-c"
                height={380}
                width={800}
                objectFit="cover"
                className="rounded-md"
              />
              <div>
                <h1 className="font-bold"> My Portfolio</h1>
                <p className="text-xs font-semibold text-gray-600">My portfolio website</p>
              </div>
            </a>
          </Link>
        </div>
      </div>
      {/* What I offer */}
    </Layout>
  );
}
