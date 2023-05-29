import React from "react";
import Navbar from "./navbar/Navbar";
import "./global.css";
import MainPages from "./pages/MainPages";

const App = () => {
  return (
    <div>
      <Navbar />
      <MainPages />
    </div>
  );
};

export default App;
