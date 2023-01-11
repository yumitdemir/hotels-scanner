import React, { useEffect } from "react";
import { useState } from "react";
import shortid from "shortid";
import axios from "axios";
import { Link } from "react-router-dom";

import styles from "./styles.module.css";

function Search(props) {
  const [locationRecList, setLocationRecList] = useState([]);
  const [location, setLocation] = useState("");
  const [inDate, setInDate] = useState("");
  const [outDate, setOutDate] = useState("");
  const [apiStatus, setApiStatus] = useState(true);
  const [locationId, setLocationId] = useState();

  function LocationRecommendation(location) {}
  useEffect(
    apiStatus
      ? () => {
          const controller = new AbortController();
          const options = {
            method: "GET",
            url: "https://hotels4.p.rapidapi.com/locations/v3/search",
            params: {
              q: `${location}`,
              locale: "en_US",
              langid: "1033",
              siteid: "300000001",
            },
            headers: {
              "X-RapidAPI-Key":
                "b411493026msh5ba1eeb0ec7d94dp15766ajsn5dbed6e94642",
              "X-RapidAPI-Host": "hotels4.p.rapidapi.com",
            },
            signal: controller.signal,
          };

          axios
            .request(options)
            .then(function (response) {
              console.log(response.data.sr);
              setLocationRecList(response.data.sr);
            })
            .catch(function (error) {});

          return () => {
            controller.abort();
          };
        }
      : () => {
          console.log("dsa");
        },
    [location]
  );

  return (
    <div className={styles.Search}>
      <div className={styles.SearchContainer}>
        <input
          type="text"
          value={location}
          onChange={(e) => {
            setLocation(e.target.value);
          }}
          onFocus={() => {
            setApiStatus(true);
          }}
        />
        <input
          type="date"
          value={inDate}
          onChange={(e) => {
            setInDate(e.target.value);
          }}
        />
        <input
          type="date"
          value={outDate}
          onChange={(e) => {
            setOutDate(e.target.value);
          }}
        />
        {(apiStatus === false) & (inDate !== "") & (outDate !== "") ? (
          <Link to={`/${locationId}/${inDate}/${outDate}`}>
            <button className={styles.submitButton} onClick={() => {}}>
              Search
            </button>
          </Link>
        ) : (
          <div></div>
        )}
      </div>
      <div className={styles.reccommendations}>
        {locationRecList &&
          locationRecList.slice(0, 4).map((item) => {
            return (
              <div
                onClick={() => {
                  setLocation(item.regionNames.primaryDisplayName);
                  setLocationRecList([]);
                  setApiStatus(false);
                  setLocationId(item.gaiaId);
                }}
                key={shortid.generate()}
              >
                {item.regionNames.primaryDisplayName}
                {", "}
                {item.hierarchyInfo.country.name}
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Search;
