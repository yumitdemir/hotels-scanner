import React, { useEffect } from "react";
import LeftMenu from "../../leftMenu/LeftMenu";
import styles from "./styles.module.css";

import AutoItemLoder from "../AutoItemLoader/AutoItemLoder";

function HotelListItems({
  setStoryBy,
  cityname,
  hotelList,
  checkOut,
  checkIn,
}) {
  const SortBy = (e) => {
    setStoryBy(e.target.value);
  };

  return (
    <div className={styles.girdContainer}>
      <div className={styles.leftMenu}>
        <LeftMenu checkOut={checkOut} checkIn={checkIn} cityname={cityname} />
      </div>
      <div className={styles.hotelList}>
        <div className={styles.hotelListHeader}>
          <div className={styles.infoAndSort}>
            <div>
              <p>
                {cityname.toUpperCase()} , {hotelList.length} properties
              </p>
              <p>
                {checkOut.split("-")[2] - checkIn.split("-")[2]} night(
                {checkIn.split("-")[2]}-{checkIn.split("-")[1]}/
                {checkOut.split("-")[2]}-{checkOut.split("-")[1]})
              </p>
            </div>
            <div>
              <label htmlFor="sortBy">SortBy:</label>
              <select id="sortBy" onChange={SortBy}>
                <option value="RECOMMENDED">Recommened</option>
                <option value="PRICE_LOW_TO_HIGH">Price</option>
                <option value="DISTANCE">Distance from city centre </option>
                <option value="REVIEW_RELEVANT">Guest rating</option>
              </select>
            </div>
          </div>
        </div>

        <div className={styles.hotelListContainer}>
          <AutoItemLoder hotelList={hotelList} />
        </div>
      </div>
    </div>
  );
}

export default HotelListItems;
