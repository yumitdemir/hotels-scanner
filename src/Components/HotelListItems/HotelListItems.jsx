import React, { useEffect } from "react";
import LeftMenu from "../../leftMenu/LeftMenu";

import styles from "./styles.module.css";

import AutoItemLoder from "../AutoItemLoader/AutoItemLoder";

function HotelListItems({ cityname, hotelList, checkOut, checkIn }) {
  return (
    <div className={styles.girdContainer}>
      <div className={styles.leftMenu}>
        <LeftMenu cityname={cityname} checkOut={checkOut} checkIn={checkIn} />
      </div>
      <div className={styles.hotelList}>
        <div className={styles.hotelListHeader}>
          <p>
            {cityname.toUpperCase()} , {hotelList.length} properties
          </p>
          <p>
            {checkOut.split("-")[2] - checkIn.split("-")[2]} night(
            {checkIn.split("-")[2]}-{checkIn.split("-")[1]}/{" "}
            {checkOut.split("-")[2]}-{checkOut.split("-")[1]}){" "}
          </p>
        </div>
        <div className={styles.hotelListContainer}>
          <AutoItemLoder hotelList={hotelList} />
        </div>
      </div>
    </div>
  );
}

export default HotelListItems;
