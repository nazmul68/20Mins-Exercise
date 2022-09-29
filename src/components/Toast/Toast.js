import React from "react";
import Swal from "sweetalert2";

const Toast = () => {
  return (
    <div className="text-center">
      <button
        className="btn btn-primary px-5 py-3 mt-4 fw-bold"
        onClick={() => {
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Actively Completed",
            showConfirmButton: false,
            timer: 2000,
          });
        }}
      >
        Actively Completed
      </button>
    </div>
  );
};

export default Toast;
