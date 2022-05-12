import React from "react";
import "./Section1.css";

function Section1({ title, paragraph }) {
  return (
    <div className="section section1">
      <div className="sectionContainer sectionContainer1">
        <h1>Dance Tour</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem, error!
        </p>
        <div className="boxes">
          <div className="box">
            <img src="/img/DanceTour-img1.png" alt="" />
              <h1>America</h1>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus, nihil.</p>
          </div>
          <div className="box">
            <img src="/img/Asia.png" alt="" />
              <h1>Asia</h1>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus, nihil.</p>
          </div>
          <div className="box">
            <img src="/img/Australia.png" alt="" />
              <h1>Australia</h1>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus, nihil.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section1;
