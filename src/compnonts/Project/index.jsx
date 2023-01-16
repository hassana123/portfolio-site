import React from "react";
import "./style.css";
import qoutely from "../../assets/img/QUOTELY.png";
import typely from "../../assets/img/Document.png";
import PCD from "../../assets/img/PCD.png";
import drum from "../../assets/img/drum.png";
import counter from "../../assets/img/tally.png";
import port from "../../assets/img/Vite-React.png";
import todo from "../../assets/img/TODO.png";
import random from "../../assets/img/halally.png";

const index = () => {
  return (
    <section id="projects" className="project-section">
      <div className="text">
        <small> some of my</small>
        <h3>Projects</h3>
      </div>

      <div className="grid">
        <div className="project-container">
          <img src={qoutely} alt="" />
          <h4>A random quote generator </h4>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi
            maiores alias a totam magni minus!
          </p>
          <a href="" className="preview">
            preview
          </a>
          <a href="" className="github">
            Github
          </a>
        </div>
        <div className="project-container">
          <img src={counter} alt="" />
          <h4>A custom tally counter app</h4>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi
            maiores alias a totam magni minus!
          </p>
          <a href="" className="preview">
            preview
          </a>
          <a href="" className="github">
            Github
          </a>
        </div>
        <div className="project-container">
          <img src={typely} alt="" />
          <h4>A speed typing game web app</h4>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi
            maiores alias a totam magni minus!
          </p>
          <a href="" className="preview">
            preview
          </a>
          <a href="" className="github">
            Github
          </a>
        </div>
        <div className="project-container">
          <img src={drum} alt="" />
          <h4>A drum machine</h4>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi
            maiores alias a totam magni minus!
          </p>
          <a href="" className="preview">
            preview
          </a>
          <a href="" className="github">
            Github
          </a>
        </div>
        <div className="project-container">
          <img src={PCD} alt="" />
          <h4>open-source profile card</h4>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi
            maiores alias a totam magni minus!
          </p>
          <a href="" className="preview">
            preview
          </a>
          <a href="" className="github">
            Github
          </a>
        </div>
        <div className="project-container">
          <img src={port} alt="" />
          <h4>portfolio site</h4>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi
            maiores alias a totam magni minus!
          </p>
          <a href="" className="preview">
            preview
          </a>
          <a href="" className="github">
            Github
          </a>
        </div>
        <div className="project-container">
          <img src={todo} alt="" />
          <h4>Todo app</h4>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi
            maiores alias a totam magni minus!
          </p>
          <a href="" className="preview">
            preview
          </a>
          <a href="" className="github">
            Github
          </a>
        </div>
        <div className="project-container">
          <img src={random} alt="" />
          <h4>Random Users</h4>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi
            maiores alias a totam magni minus!
          </p>
          <a href="" className="preview">
            preview
          </a>
          <a href="" className="github">
            Github
          </a>
        </div>
      </div>
    </section>
  );
};

export default index;
