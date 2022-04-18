import React, { useEffect, useState, useRef } from "react";
import RINGS from "vanta/dist/vanta.rings.min";
export default function Gonear() {
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
    <div className="gonearOut" ref={myRef}>
      <div className="gonear">
        <div className="gonearleft">
          <div className="applyheader">
            Apply to the &nbsp;
            <span className="goletter">Go</span>near council
          </div>
          <div className="goleftsubtitle">
            Join our council of industry experts and have your say on what ideas
            are launched through gonear.
          </div>
          <div className="goBtns">
            <div className="goBtn">Apply to council</div>
            <div className="InquireBtn">Inquire for contribution</div>
          </div>
        </div>
        <div className="gonearright"></div>
      </div>
    </div>
  );
}
