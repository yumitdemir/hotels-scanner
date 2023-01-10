import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

function HotelList(props) {
  const [hotelList, setHotelList] = useState([]);
  const { id, checkIn, checkOut } = useParams();

  function hotelSearch(regionId, checkInDate, checkOutDate) {
    const options = {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "X-RapidAPI-Key": "229d3c35c0msh526d5f352de1744p1469b4jsndeeb62345982",
        "X-RapidAPI-Host": "hotels4.p.rapidapi.com",
      },
      body: `{"currency":"USD","eapid":1,"locale":"en_US","siteId":300000001,"destination":{"regionId":"6054439"},"checkInDate":{"day":${Number(
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
      .then((response) => console.log(response))
      .catch((err) => console.error(err));
  }
  console.log(id, checkIn.split("-"), checkOut.split("-"));
  useEffect(() => {
    console.log(checkIn.split("-"), checkOut.split("-"));
    hotelSearch(id, checkIn.split("-"), checkOut.split("-"));
  }, []);

  console.log(hotelList);
  return (
    <div>
      Can get the hotel list data from the api need to finish search city future
    </div>
  );
}

export default HotelList;
