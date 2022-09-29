import React from "react";
import BreakTime from "../BreakTime/BreakTme";

const AddBreak = (props) => {
  const { setBreakTime } = props;
  return (
    <div className="mt-5 ms-2">
      <h5 className="text-light mb-4 ms-2">Add A Break</h5>
      <button
        className="btn btn-primary fw-bold rounded-pill "
        onClick={() => {
          setBreakTime(5);
          localStorage.setItem("breakTime", JSON.stringify(5));
        }}
      >
        5min
      </button>
      <button
        className="btn btn-primary fw-bold rounded-pill ms-1"
        onClick={() => {
          setBreakTime(10);
          localStorage.setItem("breakTime", JSON.stringify(10));
        }}
      >
        10min
      </button>
      <button
        className="btn btn-primary fw-bold rounded-pill ms-1"
        onClick={() => {
          setBreakTime(15);
          localStorage.setItem("breakTime", JSON.stringify(15));
        }}
      >
        15min
      </button>
      <button
        className="btn btn-primary fw-bold rounded-pill ms-1"
        onClick={() => {
          setBreakTime(20);
          localStorage.setItem("breakTime", JSON.stringify(20));
        }}
      >
        20min
      </button>
    </div>
  );
};

export default AddBreak;
