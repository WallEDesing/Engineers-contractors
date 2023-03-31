import React from "react";
import "./style.css";

const Projects = () => {
  return (
    <div className="projects-container">
      <div className="projects-box-container">
        <div className="projects-img-container">
          <div className="projects-img-content-container">
            <h4>01</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna.
            </p>
          </div>
        </div>
        <div className="projects-img-container-2">
          <div className="projects-img-content-container-2">
            <h4>02</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
        <div className="projects-content-container">
          <h5>Sample Headline</h5>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
