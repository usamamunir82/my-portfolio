import React from "react";
import "./hireme.css";
import { MdWork } from "react-icons/md";
import { BsFillChatDotsFill } from "react-icons/bs";
import { FaRegThumbsUp } from "react-icons/fa";
import { AiOutlineSetting } from "react-icons/ai";

function HireMe() {
  return (
    <div className="container">
      <div className="asdq">
      <div className="whyHireme"><p>Why Hire Me</p></div>
    
      <div className="hireMecontent">
        <div className="hireMeBox">
          <div className="hireIconBox">
            <div className="icco">
              <MdWork className="hireIcon" />
            </div>
          </div>
          <h3 className="symbolName">Workaholic</h3>
          <p className="symbolPara">
            I’m a kind of person who can’t just stand around and doing nothing.
            I have a tendency to do something productive.
          </p>
        </div>
        <div>
          <div className="hireIconBox">
            <div className="icco">
            <BsFillChatDotsFill className="hireIcon21" />
            </div>
          </div>
          <h3 className="symbolName">Communicative</h3>
          <p className="symbolPara">
            I’m a kind of person who can’t just stand around and doing nothing.
            I have a tendency to do something productive.
          </p>
        </div>
        <div>
          <div className="hireIconBox">
          <div className="icco">
            <FaRegThumbsUp className="hireIcon2" />
            </div>
          </div>
          <h3 className="symbolName">Cooperative</h3>
          <p className="symbolPara">
            I’m a kind of person who can’t just stand around and doing nothing.
            I have a tendency to do something productive.
          </p>
        </div>
        <div>
          <div className="hireIconBox">
          <div className="icco">
            <AiOutlineSetting className="hireIcon2" />
            </div>
          </div>
          <h3 className="symbolName">Perfectionist</h3>
          <p className="symbolPara">
            I’m a kind of person who can’t just stand around and doing nothing.
            I have a tendency to do something productive.
          </p>
        </div>
      </div>
      </div>
    </div>
  );
}

export default HireMe;
