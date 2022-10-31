import React, { useRef, useState,useEffect } from "react";
import "glider-js/glider.min.css";
import Glider from "react-glider";
import "./glider.css";
import gliderImg from '../../assets/images/gliderimg.png'
import { AiOutlineRight } from "react-icons/ai";
import { AiOutlineLeft } from "react-icons/ai";


function GliderComp() {
    const leftArrowEl = useRef(null);
    const rightArrowEl = useRef(null);
    const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    setIsInitialized(Boolean(leftArrowEl.current && rightArrowEl.current));
  }, [leftArrowEl, rightArrowEl]);

  return (
    <div className="container">
      <div className="gliderContainer">
      <>
        {isInitialized && (
          <Glider
            draggable
            hasArrows
            hasDots
            slidesToScroll={1}
            slidesToShow={3}
            className="gradient-outline"
            arrows={{
              prev: leftArrowEl.current,
              next: rightArrowEl.current,
            }}
          >
           
            <div>
                <div className="gliderData">
                    
                <img src={gliderImg}/>
                
            <p>Mobile Responsive</p>
            </div>
            </div>
            <div>
                <div className="gliderData">
                <img src={gliderImg}/><p>Mobile Responsive</p>
                </div>
                </div>
            <div>
                <div className="gliderData">
                <img src={gliderImg}/><p>laptop Responsive</p>
                </div>
                </div>
            <div>
                <div className="gliderData">
                <img src={gliderImg}/><p>tablet Responsive</p>
                </div>
                </div>
           
          </Glider>
        )}
        <div style={{ position: 'relative' }}>
          <div
            ref={leftArrowEl}
            type="button"
            className="glider-prev"
            aria-label="Previous"
          >
            <span ref={leftArrowEl}>
          <AiOutlineLeft ref={leftArrowEl}  />
          </span>
          </div>
          <div
            ref={rightArrowEl}
            type="button"
            className="glider-next"
            aria-label="Next"
          >
            {/* <span ref={rightArrowEl} > */}
           <AiOutlineRight ref={rightArrowEl} />
           {/* </span> */}
          </div>
        </div>
      </>
      </div>
    </div>
  );
}

export default GliderComp;
