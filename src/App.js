import "./App.css";
import React from "react";
import Logo from "./img/logo-white.png";

const App = () => {
  return (

    <header className="header">
      <div className="logo-box">
        <img src={Logo} className="logo" alt="Logo" />
      </div>
      <div className="text-box">
        <h1 className="heading-primary">
          <span className="heading-primary-main">Niocraft</span>
          <span className="heading-primary-sub">is where life happens</span>
        </h1>
        <a href="#" className="btn btn-white">Discover our tour</a>
      </div>



    </header>


  );
};

export default App;
