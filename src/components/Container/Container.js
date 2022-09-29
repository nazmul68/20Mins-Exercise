import React from "react";
import "./Container.css";
import ExerciseCarts from "../ExerciseCarts/ExerciseCarts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDumbbell } from "@fortawesome/free-solid-svg-icons";
import PhysicianInfo from "../PhysicianInfo/PhysicianInfo";

const Container = () => {
  return (
    <div className="row">
      <div className="left-section col-sm-1 col-md-8 mx-lg-5">
        <div className="header d-flex align-items-center ms-4 mt-5">
          <span className="header-icon p-2">
            <FontAwesomeIcon icon={faDumbbell} />
          </span>
          <h1 className="text-primary fst-italic">20Mins-Exercise</h1>
        </div>
        <h5 className="my-3 ms-4 text-light">Let's try these exercise!</h5>
        <ExerciseCarts></ExerciseCarts>
      </div>
      <div className="right-section col-sm-1 col-md-3 bg-dark py-5 mx-auto me-md-0">
        <PhysicianInfo></PhysicianInfo>
      </div>
    </div>
  );
};

export default Container;
