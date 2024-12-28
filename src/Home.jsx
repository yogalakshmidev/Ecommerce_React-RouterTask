import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Search from "./components/Search";
import { Register } from "./Pages/Register";
import { Login } from "./Pages/Login";

import AddProducts from "./components/cartComponents/AddProduct";
import Productcard from "./components/Productcard";
import Button from "./components/cartComponents/Button";
import "./App.css"

const Home = () => {

  const [items, setItem] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [addedItems, setAddedItem] = useState([]);
  const [showAddProducts, setShowAddProducts] = useState(false);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/")
      .then((res) => res.json())
      .then((data) => setItem(data));
    
  }, []);
  function changingSearchData(e) {
    setSearchValue(e.target.value);
  }
  const itemsFilter = items.filter((item) =>
    item.title.toLowerCase().includes(searchValue.toLowerCase())
  );

  function addItem(item) {
    item.addNumber = 1;
    const itemArr = addedItems;
    setAddedItem([...itemArr, item]);
  }
  // console.log("Before remove fn in card",addedItems);
  function removeItem(item) {
    const newItems = addedItems.filter((addedItem) => addedItem.id !== item.id);
    setAddedItem(newItems);
    // console.log("After remove fn in card",newItems);
  }
  return (
    <div>
    {/* <h1>hi</h1>     */}
      <div className="body__container">
        <div className="nav">
          <Header />
          <div className="nav-right">
            <Search
              products={items}
              value={searchValue}
              onChangeData={changingSearchData}
            />
            <Button num={addedItems.length} click={setShowAddProducts} />
          </div>
        </div>

        {showAddProducts && (
          <AddProducts
            click={setShowAddProducts}
            items={addedItems}
            removeItem={removeItem}
            setAddedItem={setAddedItem}
          />
        )}
        <Productcard
          products={itemsFilter}
          addItem={addItem}
          removeItem={removeItem}
          addedItems={addedItems}
        />
      </div>
    </div>
  );
};

export default Home;
