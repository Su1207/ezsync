import React, { useEffect, useRef } from "react";
import "./SemiProgressBar.css";
import ProgressBar from "progressbar.js";

const SemiProgressBar = ({ currentValue, totalValue }) => {
  const containerRef = useRef(null);
  const progressBarRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      progressBarRef.current = new ProgressBar.SemiCircle(
        containerRef.current,
        {
          strokeWidth: 12,
          color: "white",
          trailColor: "rgba(255,255,255, 0.4)",
          trailWidth: 12,
          easing: "easeInOut",
          duration: 1400,
          svgStyle: {
            height: "130px",
            width: "200px",
            fill: "none",
            stroke: "#fafafa",
            strokeWidth: 15,
            strokeLinecap: "round",
            filter: "drop-shadow(-3px -2px 5px rgba(255, 255, 255, 0.5))",
          },
          text: {
            value: "",
            alignToBottom: false,
            className: "progressbar__label",
          },
          step: (state, bar) => {
            bar.path.setAttribute("stroke", state.color);
            const percentage = (currentValue / totalValue) * 100;
            const displayValue = `Total<br>${currentValue}/${totalValue}`;
            bar.setText(displayValue);
            bar.text.style.color = state.color;
          },
        }
      );

      const percentage = currentValue / totalValue;
      progressBarRef.current.animate(percentage); // Animate to the calculated percentage
    }

    return () => {
      if (progressBarRef.current) {
        progressBarRef.current.destroy();
      }
    };
  }, [currentValue, totalValue]);

  return (
    <div className=" font-poppins">
      <div className="card">
        <h3 className="">Total Candidates</h3>
        <div
          ref={containerRef}
          className="progress-bar-container flex items-center justify-center"
        ></div>
        {/* <div className="mt-4 flex justify-center text-black items-center gap-8">
          <div className=" text-xs flex items-center gap-2">
            <div className=" w-3 h-3 bg-[#fafafa] rounded-full"></div>
            Screening Cleared
          </div>
          <div className=" text-xs flex items-center gap-2">
            <div className=" w-3 h-3 bg-[#FFFFFF66] rounded-full"></div>
            Offboarding
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default SemiProgressBar;
