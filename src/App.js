import React from "react";
import Home from "./components/Home/Home";
import Buildings from "./components/Buildings/Buildings";
import Contact from "./components/Contact Us/Contact";
import More from "./components/More/More";
import Creativity from "./components/Creativity/Creativity";
import Stunning from "./components/stunning/Stunning";
import Projects from "./components/Projects/Projects";
import Legacy from "./components/Legacy of Success/Legacy";
import ContactUs from "./components/Footer contact us/ContactUs";
import "./App.css";

//The first page of project
function App() {
  return (
    <div className="App">
      <Home />
      <Buildings />
      <Contact />
      <More />
      <Creativity />
      <Stunning />
      <Projects />
      <Legacy />
      <ContactUs />
    </div>
  );
}

export default App;
