import React, { useContext, useEffect, useState } from "react";
import "./Toggle.css";
import cx from "classnames";

export const Toggle = ({ rounded = false, isToggled, onToggle }) => {
  const sliderCX = cx("slider", {
    rounded: rounded,
  });
  return (
    <label className="switch">
      <input type="checkbox" checked={isToggled} onChange={onToggle} />
      <span className={sliderCX} />
    </label>
  );
};
