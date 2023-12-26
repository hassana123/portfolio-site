import React from "react";
import "./style.css";
import next from "../../assets/icons/next.png";
import Html2 from "../../assets/icons/icons8-html-5-150.svg";
import Css from "../../assets/icons/icons8-css3-150.svg";
import react from "../../assets/icons/icons8-react-200.svg";
import Js from "../../assets/icons/icons8-javascript-logo.svg";
import Github from "../../assets/icons/icons8-github-squared-200.svg";
import git from "../../assets/icons/icons8-git-150.svg";
import firebase from "../../assets/icons/icons8-firebase-192.svg";
import netlify from "../../assets/icons/icons8-netlify-a-cloud-computing-company-that-offers-hosting-and-serverless-backend-services-for-static-websites.-96.png";

const index = () => {
  return (
    <section id="stacks" className="stacks-section">
      <div className="text">
        <small>my</small>
        <h3>Stacks</h3>
      </div>

      <div className="stacks">
        <div>
          <img src={Html2} alt="" />
          {/* <p>HTML5</p> */}
        </div>
        <div>
          <img src={Css} alt="" />
          {/* <p>CSS3</p> */}
        </div>
        <div>
          <img src={Js} alt="" />
          {/* <p>javascript</p> */}
        </div>
        <div>
          <img src={Github} alt="" />
          {/* <p>github</p> */}
        </div>
        <div>
          <img src={git} alt="" />
          {/* <p>git</p> */}
        </div>
        <div>
          <img src={firebase} alt="" />
          {/* <p>firebase</p> */}
        </div>
        <div>
          <img src={react} alt="" />
          {/* <p>react</p> */}
        </div>
        <div>
          <img src={next} alt="" />
          {/* <p>react</p> */}
        </div>
        <div>
          <img src={netlify} alt="" />
          {/* <p>netlify</p> */}
        </div>
      </div>
    </section>
  );
};

export default index;
