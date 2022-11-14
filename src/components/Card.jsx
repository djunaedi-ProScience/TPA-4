import React from "react";

const Card = (props) => {
  //   console.log(props);
  return (
    <div className="card">
      <div className="card-img">
        <img className="img" src={props.images} alt="gambar"></img>
      </div>
      <div className="card-body">
        <h1 className="card-h1">{props.judul}</h1>
        <p className="card-p">{props.body}</p>
      </div>
      <button className="card-button-profile">Selengkapnya</button>
    </div>
  );
};

export default Card;
