import React from "react";
import "./Creativity.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
import "popper.js/dist/umd/popper.min.js";
import "bootstrap/dist/js/bootstrap.min.js";
import { Col, Row } from "react-bootstrap";

const Creativity = () => {
  return (
    <div className="Container">
      <div className="blob-container">
        <div className="blob-svg d-flex justify-content-center align-items-center">
          <svg
            viewBox="0 0 500 500"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width="100%"
            id="blobSvg"
          >
            <path
              id="blob"
              d="M467.5,282Q448,314,404,322Q360,330,378,390.5Q396,451,343.5,413Q291,375,270.5,388.5Q250,402,229,390.5Q208,379,181,380.5Q154,382,101,389.5Q48,397,44.5,357.5Q41,318,41.5,284Q42,250,58.5,221.5Q75,193,75,158Q75,123,92,89Q109,55,160,92Q211,129,230.5,123Q250,117,282.5,83Q315,49,321,96.5Q327,144,380.5,130.5Q434,117,436.5,153Q439,189,463,219.5Q487,250,467.5,282Z"
              fill="#ffffff"
            ></path>
          </svg>
          <div className="flex-wrap col-items position-absolute z-1 px-0 w-75 h-100">
            <div className="row p-0">
              <div className="col-md-4 w-33 p-0">
                <img
                  className="img-thumbnail image-new"
                  src="https://images01.nicepage.com/c461c07a441a5d220e8feb1a/2d4870e5b6925ea2a76c8696/photo-1449157291145-7efd050a4d0e.jpg"
                  alt=""
                />
              </div>
              <div className="col-md-4 bg-black text-start">
                <p className="fs-1">Creativity</p>
                <p className="fs-6">
                  Sample text. Click to select the text box. Click again or
                  double click to start editing the text.
                </p>
                <p>
                  <a
                    className="link-opacity-50-hover link-dark link-offset-2"
                    href="#"
                  >
                    Learn More
                  </a>
                </p>
                <p>
                  {" "}
                  Images form{" "}
                  <a
                    className="link-opacity-50-hover link-light link-offset-2"
                    href="#"
                  >
                    Freepik
                  </a>{" "}
                </p>
              </div>
              <div className="col-md-4 w-33 p-0">
                <img
                  className="img-thumbnail image-new"
                  src="https://images01.nicepage.com/c461c07a441a5d220e8feb1a/f88ee1a92b2b5601be13438f/fggf-min.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-4 bg-dark-subtle text-start ms-0">
                <p className="fs-1" style={{ color: "black" }}>
                  Motivation
                </p>
                <p className="fs-6" style={{ color: "black" }}>
                  Sample text. Click to select the text box. Click again or
                  double click to start editing the text.
                </p>
                <p>
                  <a
                    className="link-opacity-50-hover link-dark link-offset-2"
                    href="#"
                  >
                    Learn More
                  </a>
                </p>
              </div>
              <div className="col-md-4 p-0">
                <img
                  className="img-thumbnail image-new"
                  src="https://images01.nicepage.com/c461c07a441a5d220e8feb1a/a609133eba7a50228e1242b2/nbbnnb-min.jpg"
                  alt=""
                />
              </div>
              <div className="col-md-4 bg-dark-subtle text-start ms-0">
                <p className="fs-1" style={{ color: "black" }}>
                  Positivity
                </p>
                <p className="fs-6" style={{ color: "black" }}>
                  Sample text. Click to select the text box. Click again or
                  double click to start editing the text.
                </p>
                <p>
                  <a
                    className="link-opacity-50-hover link-dark link-offset-2"
                    href="#"
                  >
                    Learn More
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Creativity;
