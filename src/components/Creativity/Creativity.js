import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
import "popper.js/dist/umd/popper.min.js";
import "bootstrap/dist/js/bootstrap.min.js";
import { Col, Row } from "react-bootstrap";

const Creativity = () => {
  return (
    <div className="Container">
      <div className="row">
        <div className="col-md-6">
          <p>This is a Bootstrap column</p>
        </div>
        <div className="col-md-6">
          <p>This is a Bootstrap column</p>
        </div>
      </div>
    </div>
  );
};

export default Creativity;
