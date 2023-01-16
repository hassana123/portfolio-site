import React from "react";
import Header from "./compnonts/header";
import Home from "./compnonts/home";
import About from "./compnonts/About";
import Stacks from "./compnonts/stacks";
import Projects from "./compnonts/Project";
import Contact from "./compnonts/contact";
import Footer from "./compnonts/footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <Stacks />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
