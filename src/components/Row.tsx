import { default as RowProps } from "../types/row";
import download from "../assets/download.svg";

export default function Row({
  key,
  image,
  name,
  date,
  amount,
  status,
}: RowProps) {
  return (
    <div
      key={key}
      className="w-full py-6 flex justify-between items-center border-t border-t-gray-300 text-left"
    >
      <div className="flex justify-between items-center py-2 gap-1">
        <img src={image} alt="" />
        <p>{name}</p>
      </div>
      <p className="py-2">{date}</p>
      <p className="py-2 text-base font-medium">${amount}</p>
      <p className="py-2">{status}</p>
      <div className="flex justify-between items-center">
        <img src={download} alt="" />
        <p>View</p>
      </div>
    </div>
  );
}
