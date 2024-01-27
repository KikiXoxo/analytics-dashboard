import Search from "./Search";
import profile from "../assets/profile.png";
import bell from "../assets/solar_bell-outline.svg";
import calendar from "../assets/solar_calendar-linear.svg";

export default function Header() {
  return (
    <div className="transition duration-500 flex w-full h-16 p-8 justify-between items-center border-b border-b-[#E5EAEF] dark:border-b-gray-600">
      {/* <div className="flex "> */}
      <h1 className="text-xl font-semibold dark:text-gray-300">Dashboard</h1>
      <div className="flex gap-4 justify-between items-center">
        <Search />

        <div className="hidden md:flex justify-between items-center gap-2 dark:text-gray-300">
          <img src={calendar} alt="" />
          <p>November 15, 2023</p>
        </div>

        <div className="hidden md:flex justify-center border dark:border-gray-400 rounded-full p-2">
          <img src={bell} alt="" />
        </div>

        <div className="hidden md:flex gap-2 px-1.5 py-1 border rounded-3xl dark:border-gray-700">
          <div className="rounded-full dark:border-gray-400 bg-white dark:bg-gray-400 p-1">
            <img src={profile} alt="Profile Image" />
          </div>

          <div className="hidden md:flex flex-col">
            <p className="text-base dark:text-gray-300">Justin Bergson</p>
            <p className="text-sm text-right text-stone-500 dark:text-gray-400">
              Justin@gmail.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
