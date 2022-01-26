import React, { useState } from "react";
import memesData from "../memesData";

const Meme = () => {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  const [allMemeImages, setAllMemeImages] = useState(memesData);

  const getMemeImage = () => {
    const memesArray = allMemeImages.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
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
        <img className="meme" src={meme.randomImage} alt="meme" />
      </div>
    </main>
  );
};

export default Meme;
