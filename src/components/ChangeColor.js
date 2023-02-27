import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { changeColor } from "../slices/theme";

const ChangeColor = () => {
  const dispatch = useDispatch();
  const [color, setColor] = useState("");

  const handleColorChange = () => {
    dispatch(changeColor(color));
  };
  return (
    <div>
      <input type="text" onChange={(e) => setColor(e.target.value)} />
      <button onClick={handleColorChange}>Change Color</button>
    </div>
  );
};

export default ChangeColor;
