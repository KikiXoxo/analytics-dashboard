import List from "./List";
import Ratings from "./Ratings";

export default function Bottom() {
  return (
    <div className="flex flex-col md:flex-row justify-between items-stretch gap-4 p-4">
      <List />
      <Ratings />
    </div>
  );
}
