import React, { useState } from "react";
import { SketchPicker } from "react-color";
import { Slider, Button, Typography } from "@material-ui/core";
import { render } from "react-dom";

const GradientGenerator = () => {
const [angle, setAngle] = useState(0);
const [startColor, setStartColor] = useState("#ffffff");
const [endColor, setEndColor] = useState("#000000");
const [code, setCode] = useState("");

const handleAngleChange = (event, newValue) => {
setAngle(newValue);
};

const handleStartColorChange = (color) => {
setStartColor(color.hex);
};

const handleEndColorChange = (color) => {
setEndColor(color.hex);
};

const handleGenerateCode = () => {
const gradientCode = `background-image: linear-gradient(${angle}deg, ${startColor}, ${endColor})`;;
setCode(gradientCode);
};

const gradientStyle = {
backgroundImage: `linear-gradient(${angle}deg, ${startColor}, ${endColor})`,
height: "200px",
width: "400px",
margin: "0 auto",
marginTop: "25px",
borderRadius: "10px",
border: "1.5px solid rgba(0, 0, 0, 0.8)",
};

return (
<div className="container" style={{width: "600px", textAlign: "center"}}>
<h1 className="title">Gradient Generator</h1>
<div className="slider-container">
    <Typography id="angle-slider" gutterBottom className="slider-label">
      Angle ({angle}°)
    </Typography>
    <Slider
      value={angle}
      min={0}
      max={360}
      onChange={handleAngleChange}
      aria-labelledby="angle-slider"
      className="slider"
    />
    <div className="gradient" style={gradientStyle} />
  </div>

  <div 
  style={{display: "flex", justifyContent: "center", gap: "50px", marginTop: "25px", marginBottom: "25px"}}
  className="picker-container">
    <div className="picker" style={{display: "flex",flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
      <h2 className="picker-title">Start Color</h2>
      <SketchPicker
        color={startColor}
        onChange={handleStartColorChange}
        className="color-picker"
      />
    </div>
    <div className="picker" style={{display: "flex", flexDirection: "column" ,alignItems: "center", justifyContent: "center"}}>
      <h2 className="picker-title">End Color</h2>
      <SketchPicker
        color={endColor}
        onChange={handleEndColorChange}
        className="color-picker"
      />
    </div>
  </div>

  <Button
    variant="contained"
    color="primary"
    onClick={handleGenerateCode}
    className="generate-button"
  >
    Generate Code
  </Button>

  {code && (
    <div className="code-container">
      <h2 className="code-title">Code:</h2>
      <p className="code" >{code}</p>
    </div>
  )}
</div>
);
};

export default GradientGenerator;

render(<GradientGenerator />, document.getElementById("react-target"));
