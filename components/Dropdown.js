import { FaTimes, FaHome, FaLaptop, FaBoxOpen } from "react-icons/fa";
import { MdOutlineMiscellaneousServices } from "react-icons/md";
import { GiTalk } from "react-icons/gi";
import Link from "next/link";

const Dropdown = ({ showDropdown, dropdownHandler }) => {
  return (
    <div>
      {!showDropdown ? (
        ""
      ) : (
        <>
          <div onClick={dropdownHandler} className="backdrop"></div>
        </>
      )}
      <div
        className={`dropdown_background ${
          showDropdown ? "translate-x-0" : "-translate-x-full"
        } animate ease-in-out duration-700 `}
      >
        <Link href="/" passHref>
          <div className="dropdown_header" onClick={dropdownHandler}>
            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
              <div className="h-16 w-full space-x-1 inline-flex  mt-3 ">
                <FaBoxOpen className="text-indigo-900 text-3xl" />
                <h1 className="navbar_header_title">My Portfolio</h1>
              </div>
            </div>
            <div className="right-20">
              <FaTimes onClick={dropdownHandler} className="dropdown_close" />
            </div>
          </div>
        </Link>
        <div className="border-b  border-2"></div>
        {/* List */}

        <ul className="flex flex-col mt-2">
          <Link href="#home">
            <a onClick={dropdownHandler}>
              <li className="inline-flex m-2 cursor-pointer">
                <FaHome className="text-indigo-600 text-xl mx-1" /> Home
              </li>
            </a>
          </Link>
          <Link href="#about">
            <a onClick={dropdownHandler}>
              <li className="inline-flex m-2 cursor-pointer">
                <GiTalk className="text-indigo-600 text-xl mx-1 mt-1" /> About
              </li>
            </a>
          </Link>
          <Link href="#services">
            <a onClick={dropdownHandler}>
              <li className="inline-flex m-2 cursor-pointer">
                <MdOutlineMiscellaneousServices className="text-indigo-600 text-xl mx-1" /> Services
              </li>
            </a>
          </Link>
          <Link href="#recent-works">
            <a onClick={dropdownHandler}>
              <li className="inline-flex m-2 cursor-pointer">
                <FaLaptop className="text-indigo-600 text-xl mx-1" /> Recent Works
              </li>
            </a>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Dropdown;
