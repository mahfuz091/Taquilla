import React from "react";

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div>
        <h4>Tooltip</h4>
      </div>
    );
  }
};

export default CustomTooltip;
