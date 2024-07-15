import React from "react";
import { Parent } from "./components/Provider";
import ChildComponent from "./components/Child";
import Home from "./components/Home";
import About from "./components/About";

function App() {
  return (
    <Parent>
      <ChildComponent/>
      <Home/>
      <About/>
    </Parent>
  );
}

export default App;
