import React from "react";
import "./ExerciseTime.css";

const ExerciseTime = (props) => {
  const { exerciseTime } = props;
  return (
    <div className="exercise-time text-light d-flex justify-content-evenly pt-3 pb-2 mt-4 rounded">
      <h6>Exercise time</h6>
      <p className="text-warning"> {exerciseTime} min</p>
    </div>
  );
};

export default ExerciseTime;
