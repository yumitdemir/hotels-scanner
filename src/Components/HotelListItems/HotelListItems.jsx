import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import shortid from "shortid";
import styles from "./styles.module.css";

function HotelListItems({ setHotelList, hotelList }) {
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
          <p>NEW YORK , {hotelList.length} properties</p>
          <p>
            {checkOut.split("-")[2] - checkIn.split("-")[2]} night(
            {checkIn.split("-")[2]}-{checkIn.split("-")[1]}/{" "}
            {checkOut.split("-")[2]}-{checkOut.split("-")[1]}){" "}
          </p>
        </div>
        <div className={styles.hotelListContainer}>
          {hotelList.splice(0, 10).map((item) => {
            return (
              <div key={shortid.generate()} className={styles.hotelItem}>
                <div className={styles.cardHeader}>
                  <div>
                    <div className={styles.headerTitleStar}>
                      <h1>{item.name}</h1>
                      <p>
                        User score {item.reviews.score}
                        <br></br>
                        {item.reviews.total + " " + "review"}
                      </p>
                    </div>
                  </div>
                  <p>{item.destinationInfo.distanceFromMessaging}</p>
                </div>
                <div className={styles.hotelImg}>
                  <img
                    className={styles.hotelImg}
                    src={item.propertyImage.image.url}
                    alt=""
                  />
                </div>
                <div className={styles.details}>
                  <div className={styles.leftDetails}>
                    <ul>
                      <li>
                        <img src={require("../../img/AGODA.png")} alt="" />
                      </li>
                      <li>
                        <img
                          src={require("../../img/BOOKINGDOTCOMHC.png")}
                          alt=""
                        />
                      </li>
                      <li>
                        <img
                          src={require("../../img/CTRIPHOTELHC.png")}
                          alt=""
                        />
                      </li>
                      <li>
                        <img
                          src={require("../../img/HOTELSDOTCOMHC.png")}
                          alt=""
                        />
                      </li>
                    </ul>
                  </div>
                  <div className={styles.rightDetails}>
                    <ul>
                      <li>
                        <div>
                          <p className={styles.leadPrice}>
                            {item.price.lead?.formatted} <br />
                          </p>
                          <p className={styles.leadPrice}>For 2 night</p>
                          <button className={styles.viewDealBtn}>
                            View Deal
                          </button>
                        </div>
                      </li>
                      <li>jijijn</li>
                      <li>jjnkjnk</li>
                      <li>jnjjkn</li>
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default HotelListItems;
