import React from "react";
import ExerciseCarts from "../ExerciseCarts/ExerciseCarts";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faDumbbell } from "@fortawesome/free-solid-svg-icons";

const Container = () => {
  return (
    <div className="row">
      <div className="left-section col-sm-1 col-md-8">
        <h1 className="text-primary mt-5 ms-4">20Mins-Exercise</h1>
        {/* <FontAwesomeIcon icon={faDumbbell} /> */}
        <h5 className="my-3 ms-4">Let's try these exercise!</h5>
        <ExerciseCarts></ExerciseCarts>
      </div>
      <div className="right-section col-sm-1 col-md-4">
        <h2> this is right section</h2>
      </div>
    </div>
  );
};

export default Container;
