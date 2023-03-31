import React from "react";
import pic from "../../assets/ricardo-gomez-angel-KugEP5i9dxQ-unsplash.jpg";
import "./style.css";

const Legacy = () => {
  return (
    <div className="Legacy-container">
      <div className="legacy-caption-container">
        <p className="legacy-p-1">
          Tincidunt vitae semper quis lectus nulla at volutpat
        </p>
        <div>
          <h2>Building a Legacy of Success</h2>
          <p>
            Ac turpis egestas sed tempus urna. Semper viverra nam libero justo.
            Luctus venenatis lectus magna fringilla urna porttitor rhoncus
            dolor. Varius quam quisque id diam vel quam elementum. Quam
            elementum pulvinar etiam non quam. Sit amet nisl suscipit adipiscing
            bibendum. Commodo elit at imperdiet dui accumsan sit.
          </p>
          <p className="legacy-p-2">
            Egestas maecenas pharetra convallis posuere. In hendrerit gravida
            rutrum quisque non tellus orci ac. Quam vulputate dignissim
            suspendisse in est.
          </p>
          <button className="legacy-btn">READ MORE</button>
        </div>
       
      </div>
      <div className="legacy-img-container">
        <img src={pic} className="legacy-img" />
      </div>
    </div>
  );
};

export default Legacy;
