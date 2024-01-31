import React from "react";

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div>
        <img src='../../../../src/assets/images/tooltip.png' alt='' />
      </div>
    );
  }
};

export default CustomTooltip;
