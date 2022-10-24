import { AiOutlineHome } from "react-icons/ai";
import { TiThMenu } from "react-icons/ti";
import { useRouter } from "next/router";
import Link from "next/link";
import { MdWbSunny } from "react-icons/md";
import { BsMoonStarsFill } from "react-icons/bs";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

const NavBar = ({ dropdownHandler }) => {
  const router = useRouter();

  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div className="flex-col w-full flex">
      {router.pathname === "/login" || router.pathname === "/register" ? (
        ""
      ) : (
        <div className=" mb-16 backdrop-blur-xl text-gray-50">
          <div className="navbar_background ">
            <div className="sec_navbar_background items-center">
              <div className="third_navbar_background ">
                <div className="navbar_logo">
                  <AiOutlineHome className=" text-4xl" />
                </div>
              </div>

              <div className="inline-flex space-x-1 ">
                <Link href="#about">
                  <a className="navbar_list">About</a>
                </Link>
                <Link href="#services">
                  <a className="navbar_list">Services</a>
                </Link>
                <Link href="#recent-works">
                  <a className="navbar_list">Recent Works</a>
                </Link>
              </div>
              <div className="space-x-3">
                <button onClick={dropdownHandler} className="navbar_icons md:hidden">
                  <TiThMenu className="icon_style" />
                </button>

                <button onClick={() => setTheme(theme === "light" ? "dark" : "light")} className=" w-5 navbar_icons text-2xl">
                  {theme === "light" ? <BsMoonStarsFill /> : <MdWbSunny />}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;
