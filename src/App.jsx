import { useState } from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Sidebar from "./Sidebar";
import Submenu from "./Submenu";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Sidebar />
      <Hero />
      <Submenu />
    </>
  );
}

export default App;
