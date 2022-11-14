import React, { useState } from "react";
import Card from "../components/Card";

export default function Portfolio() {
  const [data, setData] = useState([
    {
      judul: "HTML",
      image: "/images/html5.png",
      body: "saya belajar html",
    },
    {
      judul: "CSS",
      image: "/images/css.png",
      body: "saya belajar css",
    },
    {
      judul: "Javascript",
      image: "/images/javascript.jpg",
      body: "saya belajar javascript",
    },
  ]);

  return (
    <div>
      <section className="section" id="Portfolio">
        <div className="container">
          <h1 className="heading text-center">Portfolio</h1>
          <div className="flex col-4">
            {data.map((item, index) => {
              return (
                <Card
                  key={index}
                  index={index}
                  judul={item.judul}
                  images={item.image}
                  body={item.body}
                ></Card>
              );
              console.log(item.judul);
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
