import React from "react";

export const InfoBlock = ({ country }) => (
  <table>
    <tbody>
      <tr>
        <th colSpan="1">Flag</th>
        <th>Area</th>
        <th>Capital</th>
        <th>Subregion</th>
      </tr>
      <tr>
        <td>
          <img src={country.flag} alt={country.name} />
        </td>
        <td>{country.area}</td>
        <td>{country.capital}</td>
        <td>{country.subregion}</td>
      </tr>
    </tbody>
  </table>
);
