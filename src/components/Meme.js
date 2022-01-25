import React from "react";

const Meme = () => {
  return (
    <main>
      <form className="form">
        <input type="text" placeholder="Top Text" className="meme--inputs" />
        <input type="text" placeholder="Bottom Text" className="meme--inputs" />

        <button className="meme--button">Get a new meme image 🖼</button>
      </form>
    </main>
  );
};

export default Meme;
