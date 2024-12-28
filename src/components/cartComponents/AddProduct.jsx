import React from "react";
import CardList from "./CardList";
// import "./App.css";
import { useRef } from "react";
const AddProducts = ({ items, click, removeItem, setAddedItem }) => {
  const total = items
    .reduce((pre, cur) => {
      return pre + Number(cur.addNumber) * Number(cur.price);
    }, 0)
    .toFixed(2);
  
  const showDivRef = useRef(null);

  return (
    <div ref={showDivRef} className="addproducts__container">
      
      <div className="right-side">
        <div className="right-side-header">
          <h1>
            Shopping <span className="total-items">{items.length}</span>
            {items.length <= 1 ? " item" : " items"}
          </h1>
          <button
            className="remove-item-btn"
            onClick={() => {
              showDivRef.current.classList.add("animate");
              setTimeout(() => click(false), 200);
            }}
          >
            ⌫
          </button>
        </div>
        <div className="right-side-body">
          {items.map((item, i, itemsArr) => (
            <CardList
              key={item.id}
              item={item}
              removeItem={removeItem}
              setAddedItem={setAddedItem}
              itemsArr={itemsArr}
            />
          ))}
        </div>
        <div className="right-side-footer">
          <div className="bar"></div>
          <div className="footer-head">
            <h4>Total :</h4>
            <h1>${total}</h1>
          </div>
          <div className="check-out">
            <button
              className="check-out-btn"
              onClick={() => {
                items.length >= 1 && print();
              }}
            >
              Check Out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProducts;
