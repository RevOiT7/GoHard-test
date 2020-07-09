import React from "react";

export const CountriesList = ({
  countries,
  selectedCountry,
  setSelectedCountry,
}) => (
  <div className="countries-wrapper">
    {countries &&
      countries.map((item, index) => (
        <div
          key={index}
          className={
            selectedCountry && selectedCountry.name === item.name
              ? "country-item-active"
              : "country-item"
          }
          onClick={() => setSelectedCountry(item)}
        >
          <span className="country-name">{item.name}</span>
          <br />
          {`Population: ${item.population}`}
        </div>
      ))}
  </div>
);
