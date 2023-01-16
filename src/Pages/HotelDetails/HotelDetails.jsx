import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import styles from "./styles.module.css";

import PhotoSlide from "../../Components/photoSlide/PhotoSlide";
import HotelDetailsHeader from "../../Components/HotelDetailsHeader/HotelDetailsHeader";
import HotelDetailsSummary from "../../Components/HotelDetailsSummary/HotelDetailsSummary";

function HotelDetails() {
  const [propertieDetails, setpropertieDetails] = useState();
  const [imgaeList, setImageList] = useState([]);

  const { propertieId, lat, lon } = useParams();

  const createImgList = () => {
    let imgaeeList = [];
    propertieDetails?.propertyGallery?.images?.forEach((item) => {
      imgaeeList = [...imgaeeList, item.image.url];
    });

    setImageList(imgaeeList.slice(0, 50));
  };

  const ApiCall = () => {
    const options = {
      method: "POST",
      url: "https://hotels4.p.rapidapi.com/properties/v2/detail",
      headers: {
        "content-type": "application/json",
        "X-RapidAPI-Key": "9159b6f10dmsh11cd975195be1ccp1dff76jsn0b83aa1105eb",
        "X-RapidAPI-Host": "hotels4.p.rapidapi.com",
      },
      data: `{"currency":"USD","eapid":1,"locale":"en_US","siteId":300000001,"propertyId":"${propertieId}"}`,
    };

    axios
      .request(options)
      .then(function (response) {
        setpropertieDetails(response.data.data.propertyInfo);
      })

      .catch(function (error) {
        console.error(error);
      });
  };

  useEffect(() => {
    ApiCall();
  }, []);
  useEffect(() => {
    createImgList();
  }, [propertieDetails]);
  return (
    <div>
      {propertieDetails ? (
        <div className={styles.hotelDetailsContainer}>
          <HotelDetailsHeader propertieDetails={propertieDetails} />
          <PhotoSlide imgss={imgaeList} />
          <HotelDetailsSummary propertieDetails={propertieDetails} />
        </div>
      ) : (
        <p>Loading</p>
      )}

      <iframe
        src={`https://maps.google.com/maps?q=${lat}, ${lon}&z=15&output=embed`}
        width="600"
        height="450"
        frameBorder="0"
        style={{ border: 0 }}
        allowFullScreen=""
        aria-hidden="false"
        tabIndex="0"
      />
    </div>
  );
}

export default HotelDetails;
