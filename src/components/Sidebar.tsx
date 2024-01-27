import { useState } from "react";

import vector from "../assets/Vector.svg";
import category from "../assets/category.svg";
import trendUp from "../assets/trend-up.svg";
import profile2user from "../assets/profile-2user.svg";
import box from "../assets/box.svg";
import discountShape from "../assets/discount-shape.svg";
import infoCircle from "../assets/info-circle.svg";
import brightness from "../assets/brightness.svg";
import moon from "../assets/moon.svg";
import arrowRight from "../assets/arrow-right.svg";
import setting from "../assets/setting.svg";
import logout from "../assets/logout.svg";

import useDark from "../hooks/useDark";

export default function Sidebar() {
  const [colorTheme, setTheme] = useDark();
  const [darkMode, setDarkMode] = useState(
    colorTheme === "light" ? true : false
  );

  const handleClick = () => {
    setTheme(colorTheme);
    setDarkMode(!darkMode);
  };

  return (
    <div className="hidden transition duration-500 py-4 md:flex flex-col justify-between items-center gap-y-4 md:gap-y-6 md:border-r border-r-[#E5EAEF] dark:border-r-gray-400 fixed w-[5%]">
      <div className="flex flex-col justify-between items-center md:gap-y-6 gap-y-4">
        <img
          src={vector}
          alt=""
          className="hover:cursor-pointer hover:fill-[#34CAA5] hover:border-r8"
        />
        <img
          src={category}
          alt=""
          className="hover:cursor-pointer hover:fill-[#34CAA5] hover:border-r8"
        />
        <img
          src={trendUp}
          alt=""
          className="hover:cursor-pointer hover:fill-[#34CAA5] hover:border-r8"
        />
        <img
          src={profile2user}
          alt=""
          className="hover:cursor-pointer hover:fill-[#34CAA5] hover:border-r8"
        />
        <img
          src={box}
          alt=""
          className="hover:cursor-pointer hover:fill-[#34CAA5] hover:border-r8"
        />
        <img
          src={discountShape}
          alt=""
          className="hover:cursor-pointer hover:fill-[#34CAA5] hover:border-r8"
        />
        <img
          src={infoCircle}
          alt=""
          className="hover:cursor-pointer hover:fill-[#34CAA5] hover:border-r8 fill-blue-500"
        />

        <div className="transition duration-500 active:translate-y-1 flex flex-col justify-between items-center gap-y-4 md:gap-y-6 py-1 mx-1 rounded-3xl bg-gray-300 dark:bg-gray-300">
          <img
            src={brightness}
            alt=""
            className="dark:bg-gray-300 bg-[#34CAA5] p-1.5 mx-1 rounded-full hover:cursor-pointer hover:fill-[#34CAA5]"
            onClick={handleClick}
          />
          <img
            src={moon}
            alt=""
            className="dark:bg-[#34CAA5] p-0.5 mx-1 rounded-full hover:cursor-pointer hover:fill-[#34CAA5]"
            onClick={handleClick}
          />
        </div>
      </div>

      <div className="flex flex-col justify-between items-center md:gap-y-6 gap-y-4">
        <img
          src={arrowRight}
          alt=""
          className="hover:cursor-pointer hover:fill-[#34CAA5] hover:border-r8"
        />
        <img
          src={setting}
          alt=""
          className="hover:cursor-pointer hover:fill-[#34CAA5] hover:border-r8"
        />
        <img
          src={logout}
          alt=""
          className="hover:cursor-pointer hover:fill-[#34CAA5] hover:border-r8"
        />
      </div>
    </div>
  );
}
