import React from "react";
import image from "./assets/image.svg";

export default function Navbar() {
  return (
    <nav>
      <img className="nav--image" src={image} />
      <span className="nav--title">my travel journal </span>
    </nav>
  );
}
