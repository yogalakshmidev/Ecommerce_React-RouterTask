import React from "react";

const Button = ({ num, click }) => {
  return (
    <button className="add-cart-btn" onClick={() => click(true)}>
      You Added <span>{num}</span> {num <= 1 ? "item" : "items"}
    </button>
  );
};

export default Button;
