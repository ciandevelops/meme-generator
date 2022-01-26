import React, { useState } from "react";
import memesData from "../memesData";

const Meme = () => {
  const [memeImage, setMemeImage] = useState("");

  const getMemeImage = () => {
    const memesArray = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;
    setMemeImage(url);
  };

  return (
    <main>
      <div className="form">
        <input type="text" placeholder="Top Text" className="meme--inputs" />
        <input type="text" placeholder="Bottom Text" className="meme--inputs" />

        <button onClick={getMemeImage} className="meme--button">
          Get a new meme image 🖼
        </button>
      </div>

      <img src={memeImage} alt="meme" />
    </main>
  );
};

export default Meme;
