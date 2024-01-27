import Chart from "./Chart";
import CardGroup from "./CardGroup";

export default function Top() {
  return (
    <div className="flex flex-col md:flex-row justify-between items-stretch gap-4 p-4">
      <Chart />
      <CardGroup />
    </div>
  );
}
