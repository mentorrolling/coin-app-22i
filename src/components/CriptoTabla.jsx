import React from "react";
import DatosTabla from "./DatosTabla";

function CriptoTabla(props) {
  const { setUpdate, update, datos } = props;

  return (
    <table className="table table-coin">
      <thead>
        <tr>
          <th>#Rank</th>
          <th>Name</th>
          <th>Price Usd</th>
          <th>Market Cap</th>
          <th>VWAP(24hs)</th>
          <th>Supply</th>
          <th>Volume(24hs)</th>
          <th>Change(24hs)</th>
          <th>
            <button className="btn btn-coin" onClick={() => setUpdate(!update)}>
              Update
            </button>
          </th>
        </tr>
      </thead>
      <tbody>
        {datos.map((coin) => (
          <DatosTabla key={coin.id} coin={coin} />
          
        ))}
      </tbody>
    </table>
  );
}

export default CriptoTabla;
