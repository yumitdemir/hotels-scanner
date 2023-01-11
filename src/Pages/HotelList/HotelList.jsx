import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

import HotelListItems from "../../Components/HotelListItems/HotelListItems";
import styles from "./styles.module.css";
function HotelList(props) {
  const { id, checkIn, checkOut } = useParams();
  const [hotelList, setHotelList] = useState([]);
  function hotelSearch(regionId, checkInDate, checkOutDate) {
    const options = {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "X-RapidAPI-Key": "b411493026msh5ba1eeb0ec7d94dp15766ajsn5dbed6e94642",
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
      )}},"rooms":[{"adults":2,"children":[{"age":5},{"age":7}]}],"resultsStartingIndex":0,"resultsSize":200,"sort":"PRICE_LOW_TO_HIGH","filters":{"price":{"max":150,"min":100}}}`,
    };

    fetch("https://hotels4.p.rapidapi.com/properties/v2/list", options)
      .then((response) => response.json())
      .then((response) => setHotelList(response.data.propertySearch.properties))
      .catch((err) => console.error(err));
  }

  useEffect(() => {
    console.log(id);
    hotelSearch(id, checkIn.split("-"), checkOut.split("-"));
  }, []);
  return (
    <div className={styles.HotelList}>
      {hotelList.length === 0 ? (
        <div className={styles.loading}>
          <p>Loading</p>
        </div>
      ) : (
        <HotelListItems
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
