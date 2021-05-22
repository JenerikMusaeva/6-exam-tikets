import React from "react";
import Tiket from "./Tiket";

function TiketsList(props) {
  let tikets = props.TiketsData;

  return (
    <div className="tikets-list">
      {tikets.map((tiket) => {
        return <Tiket key={tiket.id} data={tiket} />;
      })}
    </div>
  );
}

export default TiketsList;
