import React, { useEffect } from "react";
import { useState } from "react";
import shortid from "shortid";

function SearchBox({ setLocation, location }) {
  const [locationRecList, setLocationRecList] = useState([]);

  function LocationRecommendation(location) {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "229d3c35c0msh526d5f352de1744p1469b4jsndeeb62345982",
        "X-RapidAPI-Host": "hotels4.p.rapidapi.com",
      },
    };

    fetch(
      `https://hotels4.p.rapidapi.com/locations/v3/search?q=${location}&locale=en_US&langid=1033&siteid=300000001`,
      options
    )
      .then((response) => response.json())
      .then((response) => setLocationRecList(response.sr))
      .then(console.log(locationRecList, "dasads"))
      .catch((err) => console.error(err));
  }
  useEffect(() => {
    location.length > 1 && LocationRecommendation(location);
  }, [location]);
  return (
    <>
      <input
        type="text"
        value={location}
        onChange={(e) => {
          setLocationRecList([]);
          setLocation(e.target.value);
        }}
      />
      <div>
        {locationRecList && locationRecList.length >= 1
          ? locationRecList.map((item) => {
              return <div key={shortid.generate()}>{item.gaiaId}</div>;
            })
          : () => {
              return <div key={shortid.generate()}></div>;
            }}
      </div>
    </>
  );
}

export default SearchBox;
