import React from "react";

function Tiket(props) {
  let { price, name, wayMinutes, transfers } = props.data;

  let priceWithSpaces = () => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

  let timeToFly = () => {
    let hours = Math.trunc(wayMinutes/ 60);
    let minutes = wayMinutes % 60;
    return hours + "ч " + minutes + "м";
  };

  return (
    <div className="tiket">
      <h2 className="price">{priceWithSpaces()} Р</h2>
      <div className="info">
        <div className="info-item">
          <h3 className="title">Авиакомпания</h3>
          <p className="text">{name}</p>
        </div>
        <div className="info-item">
          <h3 className="title">в пути</h3>
          <p className="text">{timeToFly()}</p>
        </div>
        <div className="info-item">
          <h3 className="title">{transfers.length} пересадки</h3>
          <p className="text">{transfers.join(", ")}</p>
        </div>
      </div>
    </div>
  );
}

export default Tiket;
