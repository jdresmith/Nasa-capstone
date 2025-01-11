//Displays the image of the day gathered from the api //
import React from 'react';

export default function Main(props) {
  const { data } = props;
  return (
    <div className="imgContainer">
      <img src={data.hdurl} alt={data.title || "bg-img"} className="bgImage" />
    </div>
  );
}
