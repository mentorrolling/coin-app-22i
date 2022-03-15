import React from "react";
import numeral from "numeral";
import CoinIcon from "./CoinIcon";
import { Link } from "react-router-dom";

const CoinTable = ({ update, setUpdate, datos }) => {
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
          {/* <th>Change(24hs)</th> */}
          <th>
            <button className="btn btn-coin" onClick={() => setUpdate(!update)}>
              Update
            </button>
          </th>
        </tr>
      </thead>
      <tbody>
        {datos.map((coin) => (
          <tr key={coin.id}>
            <td className="text-center">{coin.rank}</td>
            <td className="d-flex justify-content-between">
              <CoinIcon symbol={coin.symbol} />
              <Link className="nav-link" to={`/coin/${coin.id}`}>
                {coin.name}
              </Link>
            </td>
            <td>{numeral(coin.priceUsd).format("$0,0.00")}</td>
            <td>{numeral(coin.marketCapUsd).format("($ 0.00 a)")}</td>
            <td>{numeral(coin.vwap24Hr).format("$0,0.00")}</td>
            <td>{numeral(coin.supply).format("($ 0.00 a)")}</td>
            <td>{numeral(coin.volumeUsd24Hr).format("($ 0.00 a)")}</td>
            <td
              className={
                coin.changePercent24Hr > 0 ? "text-success" : "text-danger"
              }
            >
              {parseFloat(coin.changePercent24Hr).toFixed(2)}%
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CoinTable;
