import React from "react";
import "./style.css";
import hassy from "../../assets/img/snaphassy.svg";

const index = () => {
  return (
    <section>
      <div className="text">
        <h1>Hello, I am a Frontend Developer</h1>
        <p>
          Hi, I’m a Frontend Developer currently based in Nigeria with 1+ years
          of professional experience in Web development using different web
          technologies
        </p>
        <a href="">Holla at with me</a>
      </div>
      <div className="myimage">
        <img src={hassy} alt="" />
      </div>
    </section>
  );
};

export default index;
