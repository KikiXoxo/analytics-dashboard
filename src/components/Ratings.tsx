import { ratings } from "../data/ratings";
import AnimVariants from "../types/animVariants";
import "../styles/ratings.css";

export default function Ratings() {
  const animVariants: AnimVariants = {
    0: "animate-progress0",
    1: "animate-progress1",
    2: "animate-progress2",
    3: "animate-progress3",
  };

  return (
    <div className="w-full md:w-2/5 p-4 border rounded-3xl bg-inherit dark:border-gray-600 bg-white dark:bg-inherit">
      <div className="flex justify-between items-center pb-4">
        <p className="font-semibold text-lg dark:text-gray-400">Top Platform</p>
        <p className="font-medium text-[#34CAA5]">See All</p>
      </div>

      <div className="flex flex-col justify-between items-stretch gap-6">
        {ratings.map(({ key, title, color, amount }) => (
          <div key={key} className="flex flex-col">
            <p className="font-semibold dark:text-gray-400">{title}</p>
            <div className="transition duration-500 my-4 h-3 dark:bg-gray-800 bg-[#F5F5F5] rounded-[40px] shadow-inner">
              <div
                className={`h-full bg-[100%] rounded-full ${animVariants[key]} `}
                style={{ width: `${60 - key * 10}%`, backgroundColor: color }}
              ></div>
            </div>
            <p className="font-normal text-lg dark:text-gray-400">${amount}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
