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
        <button
          onClick={dropdownHandler}
          className="text-3xl font-semibold absolute right-4 top-4"
        >
          x
        </button>
        {/* List */}

        <ul className="flex flex-col mt-10 ">
          <Link href="#home">
            <li
              onClick={dropdownHandler}
              className="inline-flex transition-all duration-500 m-2 hover:scale-110 cursor-pointer text-2xl font-semibold"
            >
              <FaHome className="text-indigo-600 text-4xl mx-1" /> Home
            </li>
          </Link>
          <Link href="#about">
            <li
              onClick={dropdownHandler}
              className="inline-flex transition-all duration-500 m-2 hover:scale-110 cursor-pointer text-2xl font-semibold"
            >
              <GiTalk className="text-indigo-600 text-4xl mx-1 mt-1" /> About
            </li>
          </Link>
          <Link href="#services">
            <li
              onClick={dropdownHandler}
              className="inline-flex transition-all duration-500 m-2 hover:scale-110 cursor-pointer text-2xl font-semibold"
            >
              <MdOutlineMiscellaneousServices className="text-indigo-600 text-4xl mx-1" />{" "}
              Services
            </li>
          </Link>
          <Link href="#projects">
            <li
              onClick={dropdownHandler}
              className="inline-flex transition-all duration-500 m-2 hover:scale-110 cursor-pointer text-2xl font-semibold"
            >
              <FaLaptop className="text-indigo-600 text-4xl mx-1" /> Projects
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Dropdown;
