import React from "react";
import numeral from "numeral";
import CoinIcon from "../components/CoinIcon";

function DatosTabla({ coin }) {
  return (
    <tr >
      {console.log(coin)}
      <td className="text-center">{coin.rank}</td>
      <td className="d-flex justify-content-between">
        <CoinIcon symbol={coin.symbol} />
        {coin.name}
      </td>
      <td>{numeral(coin.priceUsd).format("$0,0.00")}</td>
      <td>{numeral(coin.marketCapUsd).format("($ 0.00 a)")}</td>
      <td>{numeral(coin.vwap24Hr).format("$0,0.00")}</td>
      <td>{numeral(coin.supply).format("($ 0.00 a)")}</td>
      <td>{numeral(coin.volumeUsd24Hr).format("($ 0.00 a)")}</td>
      <td
        className={coin.changePercent24Hr > 0 ? "text-success" : "text-danger"}
      >
        {parseFloat(coin.changePercent24Hr).toFixed(2)}%
      </td>
    </tr>
  );
}

export default DatosTabla;
