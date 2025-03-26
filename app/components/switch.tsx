"use client";

import React from 'react'

const ToggleButton = () => {

  return (
    <label className="toggle-switch">
      <input type="checkbox" />
      <div className="toggle-switch-background">
        <div className="toggle-switch-handle"></div>
      </div>
    </label>
  );
}

export default ToggleButton;
