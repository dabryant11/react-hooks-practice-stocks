import React from "react";
import Stock from "./Stock";

function StockContainer({ stocks }) {
  const allStocks = stocks.map((stock) => {
    return (
      <Stock
        key={stock.id}
        id={stock.id}
        ticker={stock.ticker}
        name={stock.name}
        type={stock.type}
        price={stock.price}
      />
    );
  });
  return (
    <div>
      <h2>Stocks</h2>
      {allStocks}
    </div>
  );
}

export default StockContainer;
