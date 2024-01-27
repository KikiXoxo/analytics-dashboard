import search from "../assets/search.svg";

export default function Search() {
  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Search..."
        className="px-6 py-2 pr-4 pl-10 transition duration-500 rounded-3xl border border-gray-300 dark:border-gray-500 focus:outline-none dark:bg-gray-600"
      />
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <img src={search} />
      </div>
    </div>
  );
}
