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
      <div className="meme--img">
        <img src={memeImage} alt="meme" />
      </div>
    </main>
  );
};

export default Meme;
