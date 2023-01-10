import React, { useState } from "react";
import logo from "../../assets/img/logo.svg";
import "./style.css";

function index() {
  const [open, setOpen] = useState(false);
  console.log(open);
  return (
    <>
      <nav>
        <div className="logo">
          <img src={logo} alt="" />
          <h1>techSultana</h1>
        </div>
        <div className={`${open ? "links open" : "links"}`}>
          <ul>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">about</a>
            </li>
            <li>
              <a href="">project</a>
            </li>
            <li>
              <a href="">contact me</a>
            </li>
            <li>
              <a className="hireme" href="">
                Hire Me
              </a>
            </li>
          </ul>
        </div>
        <div
          className={`${open ? "hamburger-btn active" : "hamburger-btn"}`}
          onClick={() => setOpen(!open)}
        >
          <span className="line" />
          <span className="line" />
          <span className="line" />
        </div>
      </nav>
    </>
  );
}

export default index;
