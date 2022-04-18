import React, { useEffect, useState, useRef } from "react";
import RINGS from "vanta/dist/vanta.birds.min";
import "views/Home/HeroView/heroview.module.css";
export default function index() {
  const myRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(0);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        RINGS({
          el: myRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: true,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          size: 1.0,
        })
      );
    }
    return () => {
      // if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);
  return (
    <>
      <div className="gonearOut" ref={myRef}>
        <div className="gonear">
          <div className="gonearleft">
            <div className="goleftheader">
              <div className="early">
                Early access to ideas that &nbsp;
                <span className="goletter">Go</span>near
              </div>
            </div>
            <div className="goleftsubtitle">
              Highly-vetted ideas and teams you can trust. Supported by
              industry-leading creators and funds.
            </div>
            <div className="goBtns">
              <div className="goBtn">Logo</div>
              <div className="goBtn">Logo</div>
            </div>
          </div>
          <div className="gonearright">

          </div>
        </div>
      </div>
    </>
  );
}
