import React from "react";

function Stock({ id, ticker, name, type, price }) {
  function deleteStock() {
    fetch(`http://localhost:3001/stocks/${id}`, {
      method: "DELETE",
    }).then((r) => r.json());
  }
  return (
    <div>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{ticker}</p>
          <p className="card-text">{price}</p>
          <p className="card-text">{type}</p>
          <button onClick={deleteStock}>delete</button>
          <br></br>
          <br></br>
        </div>
      </div>
    </div>
  );
}
export default Stock;
