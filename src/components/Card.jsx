// This is for the product list displayed on the homescreen

import React, { useEffect } from "react";
import { useState } from "react";
const Card = ({ product, addItem, removeItem, addedItems }) => {
  const [isAdded, setIsAdded] = useState(true);
  const item = addedItems.filter((addedItem) => addedItem.id == product.id);
  useEffect(() => {
    
    item.length == 0 ? setIsAdded(true) : setIsAdded(false);
  }, [item]);

  // console.log("In card, after set the filter",item);
  return (
    <div className="card">
      <img className="card__img" src={product.image} alt="" />
      <div>
        {/* <h2>{product.category}</h2> */}
        <h2>{product.title}</h2>
        <p>{product.description}</p>
      </div>
      <div className="card-price-add">
        <span>Price : ${product.price}</span>
        <button
          className={isAdded ? "add-item-btn" : "remove-item-btn"}
          onClick={() => {
            isAdded ? addItem(product) : removeItem(product);
            setIsAdded(!isAdded);
          }}
        >
          {isAdded ? "Add " : "Cancel"}
        </button>
      </div>
    </div>
  );
};

export default Card;
