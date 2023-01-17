import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { useRef } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import styles from "./styles.module.css";

import shortid from "shortid";

function LeftMenu({ checkOut, checkIn, cityname }) {
  const { id } = useParams();
  const [checkInNew, setCheckIn] = useState(checkIn);
  const [checkOutNew, setCheckOut] = useState(checkOut);
  const [location, setLocation] = useState(cityname);
  const [locationId, setLocationId] = useState(id);
  const [locationRecList, setLocationRecList] = useState([]);
  const [apiStatus, setApiStatus] = useState(false);

  function searchApiCall() {
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
        "X-RapidAPI-Key": "bc8ba8e140msh5cfd09020077e6ep1f78c4jsn2f4a18423faa",
        "X-RapidAPI-Host": "hotels4.p.rapidapi.com",
      },
      signal: controller.signal,
    };

    axios
      .request(options)
      .then(function (response) {
        setLocationRecList(response.data.sr);
      })
      .catch(function (error) {});

    return () => {
      controller.abort();
    };
  }
  const [firstRender, setFirstRender] = useState(false);

  useEffect(() => {
    if (firstRender) searchApiCall();
    else setFirstRender(true);
  }, [location]);

  return (
    <div className={styles.leftMenuContainer}>
      <ul className={styles.leftMenuList}>
        <li>
          <input
            type="text"
            value={location}
            onChange={(e) => {
              setLocation(e.target.value);
            }}
          />
          <div className={styles.citysuggestion}>
            {locationRecList.splice(0, 4).map((item) => {
              return (
                <p
                  onClick={() => {
                    setLocationId(item.gaiaId);
                    setLocation(item.regionNames.primaryDisplayName);
                  }}
                  key={shortid.generate()}
                >
                  {item.regionNames.primaryDisplayName},
                  {item.hierarchyInfo.country.isoCode2}
                </p>
              );
            })}
          </div>
        </li>
        <li>
          <input
            type="date"
            value={checkInNew}
            onChange={(e) => {
              setCheckIn(e.target.value);
            }}
          />
        </li>
        <li>
          <input
            type="date"
            value={checkOutNew}
            onChange={(e) => {
              setCheckOut(e.target.value);
            }}
          />
        </li>

        <li>
          <Link
            to={`../${location}/${locationId}/${checkInNew}/${checkOutNew}`}
          >
            <button>Search</button>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default LeftMenu;
