import React from "react";

const Cart = (props) => {
  console.log(props);
  const { exercise, benifits, time, img } = props.cart;
  return (
    <div>
      <div className="col">
        <div className="card">
          <div className="card-body bg-dark text-light rounded">
            <img className="w-100 h-100 rounded" src={img} alt="" />
            <div className="cart-information p-2">
              <h5 className="card-title">{exercise}</h5>
              <p className="card-text">{benifits}</p>
              <p>Time required: {time} min</p>
              <button className="btn btn-primary w-100">Add to list</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
