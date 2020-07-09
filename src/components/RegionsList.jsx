import React from "react";
import { REGIONS } from "../constants";

export const RegionsList = ({ handleRegionClick, activeRegion }) => (
  <ul className="region-item">
    {REGIONS.map((item, index) => (
      <li key={index}>
        <button
          onClick={() => handleRegionClick(item.value)}
          className={
            activeRegion === item.value ? "region-btn-active" : "region-btn"
          }
        >
          {item.name}
        </button>
      </li>
    ))}
  </ul>
);
