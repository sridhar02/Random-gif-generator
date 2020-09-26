import React, { useState, useEffect } from "react";
import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;

export default function Tag() {
  const [tag, setTag] = useState("dogs ");
  const [gif, setGif] = useState("");

  const fetchGif = async (tag) => {
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
    try {
      const { data } = await axios.get(url);
      const imageSrc = data.data.images.downsized_large.url;
      setGif(imageSrc);
    } catch (error) {
      alert(error);
    }
  };

  const handleClick = () => {
    fetchGif(tag);
  };

  useEffect(() => {
    fetchGif(tag);
  }, []);

  return (
    <div className="container">
      <h1>Random {tag} Gif</h1>
      <img width="500" src={gif} alt="random gif" />
      <input value={tag} onChange={(e) => setTag(e.target.value)} />
      <button onClick={handleClick}>Click For New Gif</button>
    </div>
  );
}
