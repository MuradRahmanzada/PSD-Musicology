import React from "react";
import "./Section2.css";

function Section2() {
  return (
    <div className="section section2">
        <div className="sectionContainer sectionContainer2">
          <h1>Pricing</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, sapiente.</p>
          <div className="boxes boxes2">
            <div className="box box2">
              <img src="/img/Icon.png" alt="" />
              <h1>Basic</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, est.</p>
              <button>$150.00</button>
            </div>
            <div className="box box2">
              <img src="/img/Icon.png" alt="" />
              <h1>Professional</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, est.</p>
              <button>$200.00</button>
            </div>
            <div className="box box2">
              <img src="/img/Icon.png" alt="" />
              <h1>Ultimate</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, est.</p>
              <button>$250.00</button>
            </div>
          </div>
        </div>
    </div>
  );
}

export default Section2;
