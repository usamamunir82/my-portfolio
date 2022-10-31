import React from "react";
import './leatestproject.css'
import leatestproject from "../../assets/images/leatestproject.png";

function LeatestProject() {
  return (
    <div className="container">
      <div className="leatestProjectContent">
        <div className="lProject">Leatest Project</div>
        <div className="projectData">
          <img src={leatestproject} alt="leatestproject" />
          <p>DaurUang Mobile Apps</p>
          <button>View Details</button>
        </div>
        <div className="projectData">
          <img src={leatestproject} />
          <p> Ada Mekanik Mobile Apps</p>
          <button>View Details</button>
        </div>
        <div className="projectData">
          <img  src={leatestproject} />
          <p>InDorse Mobile Apps</p>
          <button>View Details</button>
        </div>
        <div className="projectMind">
          <div className="projectMindP" >
            <p className="projectMindP1">Have any project in mind?</p>
            <p className="projectMindP2">I’m available for freelancing</p>
          </div>
          <div className="projectMindButon">
          <div className="projectMindButon1">
          <button>More Projects</button></div>
          <div className="projectMindButon2"><button>Email Me</button></div>
          </div>
        </div>
      </div>
      <div className="hireMe">
        <p>WHY HIRE ME</p>
      </div>
    </div>
  );
}

export default LeatestProject;
