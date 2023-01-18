import React from "react";
import { lazy } from "react";
const Header = lazy(() => import("./compnonts/header"));
const Home = lazy(() => import("./compnonts/home"));
const About = lazy(() => import("./compnonts/About"));
const Stacks = lazy(() => import("./compnonts/stacks"));
const Projects = lazy(() => import("./compnonts/Project"));
const Contact = lazy(() => import("./compnonts/contact"));
const Footer = lazy(() => import("./compnonts/footer"));
import Loading from "./compnonts/loading/index.jsx";
// import Header from "./compnonts/header";
// import Home from "./compnonts/home";
// import About from "./compnonts/About";
// import Stacks from "./compnonts/stacks";
// import Projects from "./compnonts/Project";
// import Contact from "./compnonts/contact";
// import Footer from "./compnonts/footer";

function App() {
  return (
    <React.Suspense fallback={<Loading />}>
      <Header />
      <Home />
      <About />
      <Stacks />
      <Projects />
      <Contact />
      <Footer />
    </React.Suspense>
  );
}

export default App;
