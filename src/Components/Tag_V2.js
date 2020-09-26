import React, { useState } from "react";
import useGif from "../useGif";

export default function Tag() {
  const [tag, setTag] = useState("dogs ");
  const { gif, fetchGif } = useGif(tag);

  return (
    <div className="container">
      <h1>Random {tag} Gif</h1>
      <img width="500" src={gif} alt="random gif" />
      <input value={tag} onChange={(e) => setTag(e.target.value)} />
      <button onClick={() => fetchGif(tag)}>Click For New Gif</button>
    </div>
  );
}
