import React, { useState } from "react";

const styleDefault = {
  backgroundColor: "lightblue",
  padding: "10px",
  borderRadius: "20px",
  transition: "all 2s",
  fontSize: "10px",
  color: "red",
  transform: "rotate(180deg)",
};

const styleRounded = {
  backgroundColor: "lightgreen",
  borderRadius: "200px",
  transition: "all .1s",
  color: "black",
  transform: "rotate(0deg)",
};

const Roundy = () => {
  const [rounded, setRounded] = useState(false);
  const [v, setV] = useState(0);
  return (
    <div
      className="roundy"
      onMouseOver={() => {
        setRounded(true);
        setV(v + 1);
      }}
      onMouseOut={() => {
        setRounded(false);
      }}
      style={{ ...styleDefault, ...(rounded ? styleRounded : null) }}
    >
      {v}
    </div>
  );
};

export default Roundy;
