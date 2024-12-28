import React from 'react'


const Search = ({ value, onChangeData}) => {
  return (
    <>
    <input type="text"
    className="search_input"
    placeholder="Search Your Products Here"
    value={value}
    onChange={onChangeData} 
    />
    </>
  );
};

export default Search;