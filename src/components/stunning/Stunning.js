import React from "react";
import "./Stunning.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
import "popper.js/dist/umd/popper.min.js";
import "bootstrap/dist/js/bootstrap.min.js";
import { Col, Row } from "react-bootstrap";

const Stunning = () => {
  return (
    <div className="build-container">
      <div className="build-content img-fluid">
        <div className="row">
          <div className="col-md-9 justify-content-start">
            <p className="fs-1">
              Buildings: Stunning structures, sustainably built
            </p>
            <p className="fs-6 text-start col-md-9 text-title">
              We believe that a close, hands-on approach to project scheduling,
              management and efficient matching of resources, equipment,
              materials, labor and subcontractor work are key to our continued
              success in delivering projects safely.
            </p>
          </div>
        </div>
        
        <div className="container">
          <div className="row">
            <div className="col-md-2 icon-base">
              <img
                className="icon-manage img-thumbnail"
                src="https://images01.nicepage.com/c461c07a441a5d220e8feb1a/fa0c45d1ebca51c28a5558e4/3524752.png"
              />
            </div>
            <div className="col-md-4 text-manage">
              <div className="row text-row">
                <p className="fs-2">MANAGEMENT</p>
                <p className="fs-6 text-start">
                  Sample text. Click to select the text box. Click again or
                  double click to start editing the text.
                </p>
              </div>
            </div>
            <div className="offset-md-2 icon-base">
              <img
                className="icon-manage img-thumbnail"
                src="https://images01.nicepage.com/c461c07a441a5d220e8feb1a/a3ef0a21917851948a573f2b/767623.png"
              />
            </div>
            <div className="col-md-4">
              <div className="row">
                <p className="fs-2">ENGINEERING</p>
                <p className="fs-6 text-start">
                  Sample text. Click to select the text box. Click again or
                  double click to start editing the text.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-2 icon-base">
              <img
                className="icon-manage img-thumbnail"
                src="https://images01.nicepage.com/c461c07a441a5d220e8feb1a/bd7cc74d4c3b54dfa6adcbe0/2891415.png"
              />
            </div>
            <div className="col-md-4 text-manage">
              <div className="row">
                <p className="fs-2">RENOVATIONS</p>
                <p className="fs-6 text-start">
                  Sample text. Click to select the text box. Click again or
                  double click to start editing the text.
                </p>
              </div>
            </div>
            <div className="offset-md-2 icon-base">
              <img
                className="icon-manage img-thumbnail"
                src="https://images01.nicepage.com/c461c07a441a5d220e8feb1a/f62ea810b26a5cf19ef0abd4/1077198.png"
              />
            </div>
            <div className="col-md-4">
              <div className="row">
                <p className="fs-2">MAINTENANCE</p>
                <p className="fs-6 text-start">
                  Sample text. Click to select the text box. Click again or
                  double click to start editing the text.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Stunning;
