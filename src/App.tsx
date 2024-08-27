//tsx refers to React components while ts refers to normal typescript files

import Navbar from "./scenes/Navbar/index"
import { useState } from "react";


//import Navbar from "@scenes/Na"
function App() {
  const [selectedPage,setSelectedPage]=useState("home"); //clicked on page); 

  return <div className="app bg-gray-20 ">
    <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
  </div>;
}

export default App;