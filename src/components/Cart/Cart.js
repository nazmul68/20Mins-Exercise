import React, { useEffect, useState } from "react";
import ExerciseTime from "../ExerciseTime/ExerciseTime";

const Cart = (props) => {
  const { exercise, benifits, time, img, id } = props.cart;
  const { handleExerciseTime } = props;
  return (
    <div>
      <div className="col">
        <div className="card">
          <div className="card-body bg-dark text-light rounded">
            <img className="w-100 h-100 rounded" src={img} alt="" />
            <div className="cart-information p-2">
              <h5 className="card-title">{exercise}</h5>
              <p className="card-text">{benifits}</p>
              <p>
                Time required:{" "}
                <span className="text-warning fw-bold">{time}</span> min
              </p>
              <button
                onClick={() => handleExerciseTime(id)}
                className="btn btn-primary w-100 fw-bold fst-italic"
              >
                Add to list
              </button>
            </div>
          </div>
        </div>
      </div>
      {}
    </div>
  );
};

export default Cart;
