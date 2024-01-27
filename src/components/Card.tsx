import { default as CardProps } from "../types/card";
import trendUp from "../assets/trend-up.svg";
import trendDown from "../assets/trend-down.svg";

export default function Card({
  image,
  graph,
  heading,
  value,
  icon,
  trend,
  currency,
}: CardProps) {
  return (
    <div className="transition duration-500 flex flex-col justify-between p-4 bg-inherit border rounded-xl md:w-[46%] dark:border-gray-600">
      <div className="flex justify-between">
        <img src={image} alt="" />
        <img src={graph} alt="" />
      </div>

      <p className="font-medium text-[#898989] text-lg py-1">{heading}</p>

      <p className="transition duration-500 text-2xl font-semibold py-1 dark:text-gray-400">{`${
        currency ? "$" : ""
      }${value}`}</p>

      <div className="flex justify-between items-center gap-1">
        <div className="rounded-xl px-1 py-2 flex justify-between items-center gap-1">
          <img src={`${icon === "up" ? trendUp : trendDown}`} alt="" />
          <p className="">{trend}%</p>
        </div>

        <p className="text-[#606060] text-sm font-normal text-center">
          vs. previous month
        </p>
      </div>
    </div>
  );
}
