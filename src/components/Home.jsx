import React, { useState } from "react";

export default function Home() {
  const [btnDisplay, setbtnDisplay] = useState(true);
  const [nama, setnama] = useState("");
  const [nama2, setnama2] = useState("");
  function sembunyikan(e) {
    e.preventDefault();
    setbtnDisplay(false);
    setnama2(nama);
  }
  function Nama(e) {
    const ambilNama = e.target.value;
    setnama(ambilNama);
  }
  return (
    <section className="section" id="home">
      <div className="container">
        <div className="flex heading">
          <div className="col-4">
            <h1 className="h1-heading text-align-left">
              selamat datang <span className="nama2">{nama2}</span>
            </h1>
            <p className="p">
              dalam blog saya membagikan informasi seputar web
            </p>
          </div>
          <div className="col-6">
            <img className="img-fit" src="/images/muka.png" alt="gambar"></img>
          </div>
        </div>
        <div className="flex2">
          <h1
            style={{
              color: "white",
              visibility: btnDisplay ? "visible" : "hidden",
              margin: "5px",
            }}
          >
            Masukkan nama terlebih dahulu!
          </h1>
          <form
            className="flex2"
            style={{
              visibility: btnDisplay ? "visible" : "hidden",
              margin: "5px",
            }}
          >
            <input type="text" name="name" className="input" onChange={Nama} />
            <p></p>
            <button className="btn-Tampil" onClick={sembunyikan}>
              tekan
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
