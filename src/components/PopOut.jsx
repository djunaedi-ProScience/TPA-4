import React, { useState } from "react";

function popOut() {
  const [close, setClose] = useState(true);
  function hilang() {
    setClose((prev) => !prev);
  }

  const styleHilang = {
    visibility: close ? "visible" : "hidden",
  };
  return (
    <div>
      <div id="popOut" style={styleHilang} className="popOut-card">
        <div className="popOut-card-img">
          <img className="img" src="/images/css.png" alt="gambar"></img>
        </div>
        <div className="popOut-card-body">
          <h1 className="card-h1">CSS</h1>
          <p className="card-p">Membuat css dasar menggunakan syntax dasar</p>
        </div>
        <div className="close" onClick={hilang}>
          X
        </div>
        <button className="popOut-card-button">Selengkapnya</button>
      </div>
    </div>
  );
}

export default popOut;
