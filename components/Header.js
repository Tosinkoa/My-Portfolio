import { FaBoxOpen, FaHome, FaLaptop } from "react-icons/fa";
import { GiTalk } from "react-icons/gi";
import { TiThMenu } from "react-icons/ti";
import { useRouter } from "next/router";
import { MdOutlineMiscellaneousServices } from "react-icons/md";
import Link from "next/link";
import axios from "axios";
import FileDownload from "js-file-download";

const NavBar = ({ dropdownHandler }) => {
  const router = useRouter();

  const getPDF = async () => {
    axios({
      url: "localhost:3000/api/download-pdf",
      method: "GET",
      responseType: "blob",
    }).then((res) => {
      FileDownload(res.data, "Paul Ojo CV");
    });
  };

  return (
    <div className="flex-col w-full flex">
      {router.pathname === "/login" || router.pathname === "/register" ? (
        ""
      ) : (
        <div className="relative mb-16 ">
          <div className="navbar_background">
            <div className="sec_navbar_background">
              <div className="third_navbar_background ">
                <div className="navbar_logo">
                  <FaBoxOpen className="text-indigo-900 text-3xl" />
                  <h1 className="navbar_header_title">My Portfolio</h1>
                </div>
              </div>

              <div className="inline-flex space-x-1  md:mt-1 lg:mt-0">
                <Link href="#home">
                  <a className="navbar_list">
                    <FaHome className="text-indigo-600 text-xl mx-1" /> Home
                  </a>
                </Link>
                <Link href="#about">
                  <a className="navbar_list">
                    <GiTalk className="text-indigo-600 text-xl mx-1" /> About
                  </a>
                </Link>
                <Link href="#services">
                  <a className="navbar_list">
                    <MdOutlineMiscellaneousServices className="text-indigo-600 text-xl mx-1" /> Services
                  </a>
                </Link>
                <Link href="#recent-works">
                  <a className="navbar_list">
                    <FaLaptop className="text-indigo-600 text-xl mx-1" /> Recent Works
                  </a>
                </Link>
              </div>
              <button onClick={dropdownHandler} className="navbar_icons lg:hidden">
                <TiThMenu className="text-2xl text-gray-800 " />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;
