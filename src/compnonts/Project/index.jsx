import React from "react";
import arrow from "../../assets/icons/icons8-right-arrow-windows-11-outline-32.png";
import "./style.css";
import qoutely from "../../assets/img/QUOTELY.png";
import typely from "../../assets/img/Document.png";
import PCD from "../../assets/img/PCD.png";
import drum from "../../assets/img/drum.png";
import counter from "../../assets/img/tally.png";
import port from "../../assets/img/Vite-React.png";
import todo from "../../assets/img/TODO.png";
import rte from "../../assets/img/rte.png";
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
          <img src={rte} alt="" />
          <h4>Right Times Entertainment</h4>
          <p>
           an entertainment site, this is a dynamaic platform that offers engaging content that keeps you up to date with latest trends. contents like news, music and music video.
          </p>
          <a
            href="https://righttimesentertainment.com"
            className="preview"
          >
            preview <img src={arrow} alt="" />
          </a>
          <a
            href="https://github.com/hassana123/RTE"
            className="github"
          >
            Github <img src={arrow} alt="" />
          </a>
        </div>
      </div>
        <div className="project-container">
          <img src={qoutely} alt="" />
          <h4>A random quote generator </h4>
          <p>
            Quotely is random Quote generator pulls from my collection of
            favorite quotes from different angles of life, just over 500 as of
            October 2022. Come back every so often to add new additions.
          </p>
          <a href="https://quootely.netlify.app/" className="preview">
            preview <img src={arrow} alt="" />
          </a>
          <a href="https://github.com/hassana123/quoteLY" className="github">
            Github <img src={arrow} alt="" />
          </a>
        </div>
        <div className="project-container">
          <img src={counter} alt="" />
          <h4>A custom tally counter app</h4>
          <p>
            A Counter is a powerful productivity app to count people,
            occurrences, instances, repetitions, and anything else. Counter+ is
            a simple and easy to use counter app to keep track of multiple
            values.
          </p>
          <a href="https://tally-counter-kappa.vercel.app/" className="preview">
            preview <img src={arrow} alt="" />
          </a>
          <a
            href="https://github.com/hassana123/tally-counter"
            className="github"
          >
            Github <img src={arrow} alt="" />
          </a>
        </div>
        <div className="project-container">
          <img src={typely} alt="" />
          <h4>Typely</h4>
          <p>
            typely is a speed typing game that requires Players to quickly or
            precisely type in words displyed to them. functioning as both a
            challenge and a means to improve one's skill at touch typing.
          </p>
          <a href="https://typelyy.netlify.app/" className="preview">
            preview <img src={arrow} alt="" />
          </a>
          <a href="https://github.com/hassana123/Typly" className="github">
            Github <img src={arrow} alt="" />
          </a>
        </div>
        <div className="project-container">
          <img src={PCD} alt="" />
          <h4>Cardly</h4>
          <p>
            cardly is a open-source profile card design, it is a place to
            showcase your amazing UI design skills, animation skills, basically
            all the html, css, and javascript skills you possess. show off your
            web skills by making cool, eye catching profile cards that represent
            your brand.
          </p>
          <a href="https://profile-caard.netlify.app/" className="preview">
            preview <img src={arrow} alt="" />
          </a>
          <a
            href="https://github.com/hassana123/profile-card"
            className="github"
          >
            Github <img src={arrow} alt="" />
          </a>
        </div>
        <div className="project-container">
          <img src={todo} alt="" />
          <h4>Todo app</h4>
          <p>
            ToDo List App is a kind of app that generally used to maintain our
            day-to-day tasks or list everything that we have to do, with the
            most important tasks at the top of the list, and the least important
            tasks at the bottom. It is helpful in planning our daily schedules.
          </p>
          <a
            href="https://harmonious-todo-app.netlify.app/"
            className="preview"
          >
            preview <img src={arrow} alt="" />
          </a>
          <a href="https://github.com/hassana123/todo-app" className="github">
            Github <img src={arrow} alt="" />
          </a>
        </div>
        <div className="project-container">
          <img src={random} alt="" />
          <h4>Random Users</h4>
          <p>
            fetchs data from a Random user Generator Api and displays them in an
            ordely fashion
          </p>
          <a href="https://hallaly-hassana123.vercel.app/" className="preview">
            preview <img src={arrow} alt="" />
          </a>
          <a href="https://github.com/hassana123/hallaly" className="github">
            Github <img src={arrow} alt="" />
          </a>
        </div>
        <div className="project-container">
          <img src={drum} alt="" />
          <h4>A drum machine</h4>
          <p>
            Drum Machine is a virtual music instrument featuring sounds of drum
            instruments
          </p>
          <a href="https://drum-pad-by-hassy.netlify.app/" className="preview">
            preview <img src={arrow} alt="" />
          </a>
          <a href="https://github.com/hassana123/drumpad" className="github">
            Github <img src={arrow} alt="" />
          </a>
        </div>
        <div className="project-container">
          <img src={port} alt="" />
          <h4>portfolio site</h4>
          <p>
            portfolio site is a project i made for my self to showcase my skills
          </p>
          <a
            href="https://portfolio-site-by-hassy.vercel.app/"
            className="preview"
          >
            preview <img src={arrow} alt="" />
          </a>
          <a
            href="https://github.com/hassana123/portfolio-site"
            className="github"
          >
            Github <img src={arrow} alt="" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default index;
