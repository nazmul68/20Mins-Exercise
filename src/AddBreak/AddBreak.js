import React from "react";

const AddBreak = () => {
  return (
    <div className="mt-5 ms-2">
      <h5 className="text-light mb-4 ms-2">Add A Break</h5>
      <button className="btn btn-primary fw-bold rounded-pill ">5min</button>
      <button className="btn btn-primary fw-bold rounded-pill ms-1">
        10min
      </button>
      <button className="btn btn-primary fw-bold rounded-pill ms-1">
        15min
      </button>
      <button className="btn btn-primary fw-bold rounded-pill ms-1">
        20min
      </button>
    </div>
  );
};

export default AddBreak;
