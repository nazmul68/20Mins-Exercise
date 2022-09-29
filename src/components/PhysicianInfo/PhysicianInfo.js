import React from "react";
import image from "./images/me.jfif";
import "./PhysicianInfo.css";

const PhysicianInfo = () => {
  return (
    <div>
      <div className="text-white d-flex align-items-center justify-content-evenly">
        <img className="w-25 h-25 rounded-circle" src={image} alt="" />
        <div>
          <h6>Nazmul Sujon</h6>
          <p>Dhaka,Bangladesh</p>
        </div>
      </div>
      <div className="information text-light d-flex justify-content-evenly mt-4 rounded p-2">
        <div className="weight">
          <h5>
            71<small>kg</small>
          </h5>
          <p>weight</p>
        </div>
        <div className="height">
          <h5>
            5.8<small>feet</small>
          </h5>
          <p>height</p>
        </div>
        <div className="years">
          <h5>
            23<small>yrs</small>
          </h5>
          <p>years</p>
        </div>
      </div>
    </div>
  );
};

export default PhysicianInfo;
