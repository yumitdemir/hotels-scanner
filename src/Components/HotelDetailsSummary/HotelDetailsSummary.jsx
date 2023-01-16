import React from "react";
import shortid from "shortid";
import styles from "./styles.module.css";

function HotelDetailsSummary({ propertieDetails }) {
  return (
    <div>
      <h1>{propertieDetails.summary.amenities.topAmenities.header.text}</h1>
      <ul className={styles.amenitiesList}>
        {propertieDetails.summary.amenities.topAmenities.items.map((item) => {
          return (
            <li key={shortid.generate()}>
              {" "}
              <img src={require(`../../Icons/${item.icon.id}.png`)} alt="" />
              <p> {item.text}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default HotelDetailsSummary;
