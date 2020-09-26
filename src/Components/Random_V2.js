import React from "react";
import useGif from "../useGif";

export default function Tag() {
  const { gif, fetchGif } = useGif();

  return (
    <div className="container">
      <h1>Random Gif</h1>
      <img width="500" src={gif} alt="random gif" />
      <button onClick={fetchGif}>Click For New Gif</button>
    </div>
  );
}
