import React from "react";

const Header = () => {
  return (
    <nav>
      <div className="nav--left">
        <img src="/images/troll.png" alt="logo" />
        <h2 className="nav--title">Meme Generator</h2>
      </div>

      <div className="nav--right">
        <h4 className="nav--subtitle">React Course - Project 3</h4>
      </div>
    </nav>
  );
};

export default Header;
