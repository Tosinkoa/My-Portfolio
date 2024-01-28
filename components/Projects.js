import Image from "next/legacy/image";
import Link from "next/link";

const Projects = ({ id, link, image, label, github_link }) => {
  return (
    <div>
      <Link target="_blank" href={link}>
        <div className=" h-fit w-fit border-2 border-gray-300 rounded-md">
          <Image
            src={image}
            alt={label}
            height={380}
            width={800}
            objectFit="cover"
            className="rounded-md"
          />
        </div>
      </Link>
      <h1 className="mt-3 font-semibold text-xl md:text-2xl text-center">{label}</h1>
      <div className="mt-3 flex space-x-4 justify-center">
        <Link href={github_link}>
          <button className="rounded-3xl px-4 py-2 font-bold   hover:shadow-2xl cursor-pointer w-32  drop-shadow-2xl shadow-2xl text-gray-50bg-indigo-600 ease-in-out bg-indigo-600 text focus:bg-indigo-400 hover:bg-indigo-400 text-gray-50">
            Code
          </button>
        </Link>
        <Link href={link}>
          <button className="rounded-3xl px-4 py-2 font-bold hover:shadow-2xl cursor-pointer w-32  drop-shadow-2xl shadow-2xl text-gray-50 bg-gray-700 ease-in-out  active:bg-gray-400 hover:bg-gray-400 ">
            View
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Projects;
