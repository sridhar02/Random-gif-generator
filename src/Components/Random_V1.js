import React, { useState, useEffect } from "react";
import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;

export default function Random() {
  const [gif, setGif] = useState("");
  const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
  const fetchGif = async () => {
    try {
      const { data } = await axios.get(url);
      const imageSrc = data.data.images.downsized_large.url;
      setGif(imageSrc);
    } catch (error) {
      alert(error);
    }
  };

  const handleClick = () => {
    fetchGif();
  };

  useEffect(() => {
    fetchGif();
  }, []);
  return (
    <div className="container">
      <h1>Random Gif</h1>
      <img width="500" src={gif} alt="random gif" />
      <button onClick={handleClick}>Click For New Gif</button>
    </div>
  );
}
