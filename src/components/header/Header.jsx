import React from "react";
import "./header.css";

function Header() {
  return (
    <div className="container">
      <div className="headerCntainer">
        <div className="hedaerLogo">
          <p>Usama<span className="headS">Munir</span></p>
        </div>
        <div className="headerList">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Project</li>
            <li>Blog</li>
            <li  className="headLi">
                <div className="headerButton">
              <button>Contact me</button></div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
