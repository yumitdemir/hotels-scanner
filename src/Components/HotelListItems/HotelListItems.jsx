import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

import styles from "./styles.module.css";

import AutoItemLoder from "../AutoItemLoader/AutoItemLoder";

function HotelListItems({
  visibleItem,
  setVisibleItem,
  setHotelList,
  hotelList,
  checkOut,
  checkIn,
}) {
  console.log(hotelList, "HotelListItems --------------");
  return (
    <div className={styles.girdContainer}>
      <div className={styles.leftMenu}>
        <ul>
          <li>s</li>
          <li>s</li>
          <li>d</li>
          <li>s</li>
          <li>s</li>
          <li>d</li>
          <li>s</li>
          <li>s</li>
          <li>d</li>
        </ul>
      </div>
      <div className={styles.hotelList}>
        <div className={styles.hotelListHeader}>
          <p>NEW YORK , {hotelList.length - 20} properties</p>
          <p>
            {checkOut.split("-")[2] - checkIn.split("-")[2]} night(
            {checkIn.split("-")[2]}-{checkIn.split("-")[1]}/{" "}
            {checkOut.split("-")[2]}-{checkOut.split("-")[1]}){" "}
          </p>
        </div>
        <div className={styles.hotelListContainer}>
          <AutoItemLoder
            visibleItem={visibleItem}
            setVisibleItem={setVisibleItem}
            hotelList={hotelList}
          />
        </div>
      </div>
    </div>
  );
}

export default React.memo(HotelListItems);
