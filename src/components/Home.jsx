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
            <h1 className="h1-heading text-align-left"> selamat datang</h1>
            <p className="p">
              dalam blog saya membagikan informasi seputar web
            </p>
          </div>
          <div className="col-6">
            <img className="img-fit" src="/images/muka.png" alt="gambar"></img>
          </div>
        </div>
        <div className="flex">
          <h1 className="h1-heading">{nama2}</h1>
          <h1 style={{ color: "white" }}>Masukkan nama terlebih dahulu!</h1>
          <form style={{ visibility: btnDisplay ? "visible" : "hidden" }}>
            <input type="text" name="name" onChange={Nama} />
            <p></p>
            <button className="card-button-profile" onClick={sembunyikan}>
              tekan
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
