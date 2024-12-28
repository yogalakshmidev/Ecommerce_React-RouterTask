
import React, { useReducer, useEffect } from "react";

function reducer(state, action) {
  // console.log("Initial state inside fn reducer",state,"and action is",action);
  if (action.type === "INCREASE") {
    return {
      ...state,
      addNumber: state.addNumber + 1,
    };
  } else if (action.type === "DECREASE") {
    if (state.addNumber == 1) {
      // console.log("Shopping Cart is empty",state.addNumber);
      
      return state;
    }
    return {
      ...state,
      addNumber: state.addNumber - 1,
    };
  }
}
const CardList = ({ item, removeItem, setAddedItem, itemsArr }) => {
  const [state, dispatch] = useReducer(reducer, item);
  // console.log("inside the cart list fn datas are",item);

  useEffect(() => {
    const newArr = itemsArr.map((itemArr) => {
      
      itemArr.id == item.id && (item.addNumber = state.addNumber);
      return itemArr;
    });
    setAddedItem(newArr);
    // console.log("New Array in the cardlist",newArr);
  }, [state]);

  return (
    <div className="card-list-body">
      <img src={item.image} className="card-list-img" alt="" />
      <button id="removeCartBtn"
        className="delete-btn"
        onClick={() => {
          document.querySelector(".card-list-body").classList.add("animate");
          setTimeout(() => removeItem(item), 190);
        }}
      >
        ✘
      </button>
      <h4>{item.title}</h4>
      <hr />
      <div className="card-list-add-minu-body">
        <p>Price : ${item.price}</p>
        <div className="plus-items-minu">
          <button
            className="plus-btn"
            onClick={() => {
              dispatch({ type: "INCREASE" });
            }}
          >
            +
          </button>
          <span className="num-of-items">{item.addNumber}</span>
          <button
            className="minu-btn"
            onClick={() => {
              dispatch({ type: "DECREASE" });
            }}
          >
            -
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardList;
