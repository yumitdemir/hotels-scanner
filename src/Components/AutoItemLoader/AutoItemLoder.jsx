import React, { useMemo, useState } from "react";
import styles from "./styles.module.css";
import shortid from "shortid";

function AutoItemLoder({ hotelList }) {
  const [visibleItem, setVisibleItem] = useState(10);
  const loadMore = () => {
    setVisibleItem(visibleItem + 10);
  };

  return (
    <>
      {hotelList.slice(0, visibleItem).map((item) => {
        return (
          <div key={shortid.generate()} className={styles.hotelItem}>
            <div className={styles.cardHeader}>
              <div>
                <div className={styles.headerTitleStar}>
                  <h1>{item.name}</h1>
                  <p className={styles.userScore}>
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
                    <img src={require("../../img/CTRIPHOTELHC.png")} alt="" />
                  </li>
                  <li>
                    <img src={require("../../img/HOTELSDOTCOMHC.png")} alt="" />
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
                      <p className={styles.leadPrice}>Per night</p>
                      <button className={styles.viewDealBtn}>View Deal</button>
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
      {visibleItem < hotelList.length && (
        <button className={styles.loadMore} onClick={loadMore}>
          Load more
        </button>
      )}
    </>
  );
}

export default React.memo(AutoItemLoder);
