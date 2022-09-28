import React, { useEffect, useState } from "react";
import Cart from "../../Cart/Cart";

const ExerciseCarts = () => {
  const [exerciseCarts, setExerciseCarts] = useState([]);

  useEffect(() => {
    fetch("exercise.json")
      .then((res) => res.json())
      .then((data) => setExerciseCarts(data));
  }, []);
  return (
    <div className="row row-cols-1 row-cols-md-3 g-3 ms-3 mb-5">
      {exerciseCarts.map((cart) => (
        <Cart key={cart.id} cart={cart}></Cart>
      ))}
    </div>
  );
};

export default ExerciseCarts;
