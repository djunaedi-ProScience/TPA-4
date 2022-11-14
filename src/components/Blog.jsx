import React from "react";

function Blog() {
  return (
    <div>
      <section className="section" id="blog">
        <div className="container">
          <div className="flex column">
            <div className="col-4 card-blog">
              <h1 className="h1-blog-judul text-center">Blog</h1>
              <p className="judul-blog p-blog">Apa itu Html</p>
              <p className="p-blog">
                Hypertext Markup Language adalah bahasa markah standar untuk
                dokumen yang dirancang untuk ditampilkan di peramban internet.
              </p>
            </div>
            <div className="col-4 card-blog">
              <p className="judul-blog p-blog">Apa itu css</p>
              <p className="p-blog">
                Cascading Style Sheet merupakan aturan untuk mengatur beberapa
                komponen dalam sebuah web sehingga akan lebih terstruktur dan
                seragam
              </p>
            </div>
            <div className="col-4 card-blog">
              <p className="judul-blog p-blog">Apa itu javascript</p>
              <p className="p-blog">
                JavaScript adalah bahasa pemrograman tingkat tinggi dan dinamis.
                JavaScript populer di internet dan dapat bekerja di sebagian
                besar penjelajah web populer seperti Google Chrome, Internet
                Explorer, Mozilla Firefox, Netscape dan Opera.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Blog;
