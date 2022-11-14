import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <header>
        <nav className="main-nav">
          <h1 href="index.html" className="logo">
            {" "}
            Djunaedi Personal
          </h1>
          <ul className="nav">
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/about"}>About</Link>
            </li>
            <li>
              <Link to={"/portfolio"}>Portfolio</Link>
            </li>
            <li>
              <Link to={"/blog"}>Blog</Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}
