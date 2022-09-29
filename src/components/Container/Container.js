import React, { useEffect, useState } from "react";
import "./Container.css";

import ExerciseCarts from "../ExerciseCarts/ExerciseCarts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDumbbell } from "@fortawesome/free-solid-svg-icons";
import PhysicianInfo from "../PhysicianInfo/PhysicianInfo";
import AddBreak from "../../AddBreak/AddBreak";
import ExerciseTime from "../../ExerciseTime/ExerciseTime";
import BreakTime from "../../BreakTime/BreakTme";
import QuestionAns from "../QuestionAns/QuestionAns";

const Container = () => {
  const [exerciseCarts, setExerciseCarts] = useState([]);

  const [exerciseTime, setExerciseTime] = useState([0]);

  const [breakTime, setBreakTime] = useState([0]);

  useEffect(() => {
    // console.log(breakTime);
    const savedTime = localStorage.getItem("breakTime");
    if (savedTime) {
      setBreakTime(savedTime);
    } else {
      setBreakTime(0);
    }
  }, []);

  const handleExerciseTime = (id) => {
    const listedCart = exerciseCarts.find((cart) => cart.id === id);
    let newTime = parseInt(exerciseTime) + parseInt(listedCart.time);
    setExerciseTime(newTime);
    // console.log("cliked", cartID.time);
  };

  useEffect(() => {
    fetch("exercise.json")
      .then((res) => res.json())
      .then((data) => setExerciseCarts(data));
  }, []);
  return (
    <div className="row">
      <div className="cart-section col-sm-1 col-md-8 mx-lg-4">
        <div className="header d-flex align-items-center ms-4 mt-5">
          <span className="header-icon p-2">
            <FontAwesomeIcon icon={faDumbbell} />
          </span>
          <h1 className="text-primary fst-italic">20Mins-Exercise</h1>
        </div>
        <h5 className="my-3 ms-4 text-light">Let's try these exercise!</h5>
        <ExerciseCarts
          exerciseCarts={exerciseCarts}
          handleExerciseTime={handleExerciseTime}
        ></ExerciseCarts>
      </div>

      <div className="calculate-section col-sm-1 col-md-3 bg-dark py-5 mx-auto me-md-0 mb-5">
        <PhysicianInfo></PhysicianInfo>
        <AddBreak setBreakTime={setBreakTime}></AddBreak>
        <h5 className="text-light mt-5 ps-3">Exercise Details</h5>
        <ExerciseTime exerciseTime={exerciseTime}></ExerciseTime>
        <BreakTime breakTime={breakTime}></BreakTime>
      </div>
      <div>
        <QuestionAns></QuestionAns>
      </div>
    </div>
  );
};

export default Container;
