import React from "react";

const Header = () => {
  return (
    <nav>
      <div className="nav--left">
        <img src="/images/troll.png" alt="logo" />
        <h1 className="nav--title">Meme Generator</h1>
      </div>

      <div className="nav--right">
        <h3 className="nav--subtitle">React Course - Project 3</h3>
      </div>
    </nav>
  );
};

export default Header;
