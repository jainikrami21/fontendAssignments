import React from "react";

const name = "Current Date and Time";
const currDate = new Date().toLocaleDateString();
const currTime = new Date().toLocaleTimeString();


function Current() {
  return (
    <div className="container my-5">
      <h1> Hello , {name} </h1>
      <p> Current Date is = {currDate} </p>
      <p> Current Time is = {currTime} </p>
    </div>
  );
}

export default Current;
