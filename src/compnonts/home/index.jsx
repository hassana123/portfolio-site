import React from "react";
import "./style.css";
import whatsApp from "../../assets/icons/icons8-whatsapp-150.png";
import hassy from "../../assets/img/snaphassy.svg";
import mobilehassy from "../../assets/img/mobilehassy.svg";

const index = () => {
  return (
    <section id="home" className="home-section">
      <div className="text">
        <h1>
          Holla <small className="hello">👋🏾</small> , i am Hassana
        </h1>
        <h2> I am a Frontend Developer</h2>
        <p>
          I’m a Frontend Developer web developer who likes to create and build
          exciting and challeging projects. I have a passion for discovering new
          things and also learning new technologies.
        </p>
        <a href="https://wa.me/08102920194">
          chat me up <img src={whatsApp} alt="" />
        </a>
      </div>
      <div className="myimage">
        <img src={hassy} alt="" />
      </div>
      <div className="mobile-image">
        <img src={mobilehassy} alt="" />
      </div>
    </section>
  );
};

export default index;
