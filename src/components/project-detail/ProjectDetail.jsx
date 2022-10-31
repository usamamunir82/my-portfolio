import React from "react";
import "./projectdetail.css";

function ProjectDetail() {
  return (
    <div className="container">
      <div className="detailContainer">
        <div className="detailContent">
        <div>
          <p className="detailp1">05</p>
          <p className="detailp2">Clients Order</p>
        </div>
        <div className="completeProject">
          <p className="detailp1">03</p>
          <p className="detailp2">Completed Projects</p>
        </div>
        <div>
          <p className="detailp1">4.5</p>
          <p className="detailp2">Stars Rating</p>
        </div>
        <div>
          <p className="detailp1">06</p>
          <p className="detailp2">Months Of Experience</p>
        </div>
        </div>
      </div>
      <div className="myProject">
        <p>MY PROJECT</p>
      </div>
    </div>
  );
}

export default ProjectDetail;
