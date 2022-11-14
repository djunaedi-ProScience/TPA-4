import React from "react";

export default function Portfolio() {
  return (
    <div>
      <section className="section" id="Portfolio">
        <div className="container">
          <h1 className="heading text-center">Portfolio</h1>
          <div className="flex col-4">
            <div className="card">
              <div className="card-img">
                <img className="img" src="/images/html5.png" alt="gambar"></img>
              </div>
              <div className="card-body">
                <h1 className="card-h1">Html</h1>
                <p className="card-p">
                  Membuat kerangka dasar menggunakan syntax dasar
                </p>
              </div>
              <button className="card-button-profile">Selengkapnya</button>
            </div>
            <div className="card">
              <div className="card-img">
                <img className="img" src="/images/css.png" alt="gambar"></img>
              </div>
              <div className="card-body">
                <h1 className="card-h1">CSS</h1>
                <p className="card-p">
                  Membuat css dasar menggunakan syntax dasar
                </p>
              </div>
              <button className="card-button-profile">Selengkapnya</button>
            </div>
            <div className="card">
              <div className="card-img">
                <img
                  className="img"
                  src="/images/javascript.jpg"
                  alt="gambar"
                ></img>
              </div>
              <div className="card-body">
                <h1 className="card-h1">javascript</h1>
                <p className="card-p">Membuat javascript syntax dasar</p>
              </div>
              <button className="card-button-profile">Selengkapnya</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
