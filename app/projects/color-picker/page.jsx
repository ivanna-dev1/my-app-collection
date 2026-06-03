"use client";
import React, { useState } from "react";
import "./style.css";

export default function ColorPicker() {
  const [color, setColor] = useState("#ffffff");

  const handleColorPicker = (e) => {
    console.log(e.target.value);
    setColor(e.target.value);
  };

  const presetColors = ["#b15990", "#b87aa1", "#d293bb", "#e84aae"];

  return (
    <div className="color-picker-project">
      <div id="color-picker-container" style={{ backgroundColor: color }}>
        <div className="picker-card">
          <h1>Color Picker</h1>
          <div className="input-wrapper">
            <input
              value={color}
              onChange={handleColorPicker}
              id="color-input"
              type="color"
              style={{ backgroundColor: color }}
            />
          </div>
          <div className="hex-display">{color.toUpperCase()}</div>

          <div className="palette">
            {presetColors.map((c) => (
              <button
                key={c}
                className="palette-color"
                style={{ backgroundColor: c }}
                onClick={() => setColor(c)}
                title={c}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
