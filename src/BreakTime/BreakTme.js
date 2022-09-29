import React from "react";
import "./BreakTime.css";

const BreakTime = (props) => {
  const { breakTime } = props;
  return (
    <div>
      return (
      <div className="break-time text-light d-flex justify-content-evenly pt-3 pb-2 mt-4 rounded">
        <h6>Break time:</h6>
        <p>
          <span className="text-warning fw-bold">{breakTime}</span> min
        </p>
      </div>
      );
    </div>
  );
};

export default BreakTime;
