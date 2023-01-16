import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

import HotelListItems from "../../Components/HotelListItems/HotelListItems";
import styles from "./styles.module.css";
function HotelList(props) {
  const { cityname, id, checkIn, checkOut } = useParams();
  const [hotelList, setHotelList] = useState([]);
  const [sortBy, setStoryBy] = useState("price");

  function hotelSearch(regionId, checkInDate, checkOutDate, sortBy) {
    const options = {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "X-RapidAPI-Key": "9159b6f10dmsh11cd975195be1ccp1dff76jsn0b83aa1105eb",
        "X-RapidAPI-Host": "hotels4.p.rapidapi.com",
      },
      body: `{"currency":"USD","eapid":1,"locale":"en_US","siteId":300000001,"destination":{"regionId":"${regionId}"},"checkInDate":{"day":${Number(
        checkInDate[2]
      )},"month":${Number(checkInDate[1])},"year":${Number(
        checkInDate[0]
      )}},"checkOutDate":{"day":${Number(checkOutDate[2])},"month":${Number(
        checkOutDate[1]
      )},"year":${Number(
        checkOutDate[0]
      )}},"rooms":[{"adults":2,"children":[{"age":5},{"age":7}]}],"resultsStartingIndex":0,"resultsSize":200,"sort":"${sortBy}","filters":{"price":{"max":150,"min":100}}}`,
    };

    fetch("https://hotels4.p.rapidapi.com/properties/v2/list", options)
      .then((response) => response.json())
      .then((response) => setHotelList(response.data.propertySearch.properties))
      .catch((err) => console.error(err));
  }

  useEffect(() => {
    hotelSearch(id, checkIn.split("-"), checkOut.split("-"), sortBy);
  }, [id, checkIn, checkOut, sortBy]);
  return (
    <div className={styles.HotelList}>
      {hotelList.length === 0 ? (
        <div className={styles.loading}>
          <p>Loading</p>
        </div>
      ) : (
        <HotelListItems
          setStoryBy={setStoryBy}
          cityname={cityname}
          hotelList={hotelList}
          setHotelList={setHotelList}
          checkOut={checkOut}
          checkIn={checkIn}
        />
      )}
    </div>
  );
}

export default HotelList;
