import React from "react";
import "./style.css";
import github from "../../assets/icons/icons8-github-150.png";
import twit from "../../assets/icons/icons8-twitter-150.png";
import linkd from "../../assets/icons/icons8-linkedin-circled-150.png";

function index() {
  return (
    <footer>
      <small>©TechSultana</small>
      <div className="links">
        <a href="">
          <img src={twit} alt="" />
        </a>
        <a href="">
          <img src={github} alt="" />
        </a>
        <a href="">
          <img src={linkd} alt="" />
        </a>
      </div>
    </footer>
  );
}

export default index;
