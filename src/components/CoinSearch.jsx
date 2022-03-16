import React, { useEffect } from "react";
// import { searchCoinByName } from "../helpers/coinFetch";

const CoinSearch = () => {
  useEffect(() => {}, []);

  return (
    <div className="d-flex">
      <input
        className="form-control"
        list="datalistOptions"
        id="exampleDataList"
        placeholder="Type to search..."
        autoComplete="off"
      />
      <datalist id="datalistOptions">
        <option value="San Francisco" />
        <option value="New York" />
        <option value="Seattle" />
        <option value="Los Angeles" />
        <option value="Chicago" />
      </datalist>
    </div>
  );
};

export default CoinSearch;
