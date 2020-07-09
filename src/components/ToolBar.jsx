import React from "react";
import { SORT_BY_POPULATION, SORT_BY_NAME } from "../constants";

export const ToolBar = ({ sort }) => (
  <div className="toolbar">
    <button className="btn-default" onClick={() => sort(SORT_BY_NAME)}>
      Sort by country
    </button>
    <button className="btn-default" onClick={() => sort(SORT_BY_POPULATION)}>
      Sort by population
    </button>
  </div>
);
