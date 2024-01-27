import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Top from "./components/Top";
import Bottom from "./components/Bottom";
import Sidebar from "./components/Sidebar";

function App() {
  const [show, setShow] = useState(false);

  return (
    <div className="transition duration-500 bg-neutral-50 dark:bg-gray-700 flex flex-row justify-between">
      <div className="w-[5%] h-screen">
        <Sidebar show={show} setShow={setShow} />
      </div>

      <div className="flex flex-col w-full">
        <Header show={show} setShow={setShow} />

        <div className="flex flex-col justify-between items-stretch gap-1 px-2 md:px-6">
          <Top />
          <Bottom />
        </div>
      </div>
    </div>
  );
}

export default App;
