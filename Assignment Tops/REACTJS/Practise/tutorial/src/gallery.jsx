import React from "react";
import ReactDOM from "react-dom";
import "./gallery.css";

const heading = " Piscum Photos Random Images in 2023";
const img1 = "https://picsum.photos/200/300";
const img2 = "https://picsum.photos/250/300";
const img3 = "https://picsum.photos/300/300";
const links = "https://picsum.photos/";

// Inline CSS

const headings = {
  color: "teal",
  fontSize: "2.5rem",
  fontWeight: "bold",
  textAlign: "center",
  textTransform: "capitalize",
  textShadow: "0px 2px 4px #ffe9c5",
  margin: "70px 0",
  fontFamily:"'Josefin Sans', sans-serif",
};


function gallery() {
  return (
    <div className="container my-5">
      <h1 className="heading" style={headings}>{heading}</h1>
      <div className="img_div">
      <a href={links} target="_links">
      <img src={img1} alt="RandomImages" />
      </a>
      <a href={links} target="_links">
      <img src={img2} alt="RandomImages" />
      </a>
      <a href={links} target="_links">
      <img src={img3} alt="RandomImages" />
      </a>
      </div>
    </div>
  );
}

export default gallery;
