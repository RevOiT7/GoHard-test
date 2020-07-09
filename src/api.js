const apiUrl = 'https://restcountries.eu/rest/v2/region/';

export const fetchRegion = (region) => (
  fetch(`${apiUrl+region}`)
    .then((res) => res.json())
);


