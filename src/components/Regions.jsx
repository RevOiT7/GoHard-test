import React, { useState, useCallback } from "react";
import * as api from "../api";
import { ToolBar } from "./ToolBar";
import { InfoBlock } from "./InfoBlock";
import { RegionsList } from "./RegionsList";
import { CountriesList } from "./CountriesList";

import "./style.css";

export const Regions = () => {
  const [countries, setCountries] = useState(null);
  const [sorted, setSorted] = useState({ name: true, population: true });
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [activeRegion, setActiveRegion] = useState(null);

  const handleRegionClick = useCallback((region) => {
    api.fetchRegion(region).then(setCountries);
    setActiveRegion(region);
  }, []);

  const sort = useCallback(
    (type) => {
      const isSorted = sorted[type];
      let direction = isSorted ? 1 : -1;

      const sortedArray = [...countries].sort((a, b) => {
        if (a[type] === b[type]) {
          return 0;
        }
        return a[type] > b[type] ? direction : direction * -1;
      });
      setSorted({ [type]: !isSorted });
      setCountries(sortedArray);
    },
    [countries, sorted]
  );

  return (
    <>
      <RegionsList
        activeRegion={activeRegion}
        handleRegionClick={handleRegionClick}
      />
      {countries && (
        <>
          <ToolBar sort={sort} />
          <CountriesList
            countries={countries}
            selectedCountry={selectedCountry}
            setSelectedCountry={setSelectedCountry}
          />
        </>
      )}
      {selectedCountry && <InfoBlock country={selectedCountry} />}
    </>
  );
};
