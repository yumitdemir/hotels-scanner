import React, { useEffect, useMemo, useState } from "react";
import styles from "./styles.module.css";
import shortid from "shortid";
import { MdKeyboardArrowRight } from "react-icons/md";
import { CiBadgeDollar, CiLocationOn } from "react-icons/ci";
import { Link } from "react-router-dom";

function AutoItemLoder({ hotelList }) {
  const [visibleItem, setVisibleItem] = useState(10);
  const loadMore = () => {
    setVisibleItem(visibleItem + 10);
  };
  useEffect(() => {}, [hotelList]);

  return (
    <>
      {hotelList.slice(0, visibleItem).map((item) => {
        return (
          <div key={shortid.generate()} className={styles.hotelItem}>
            <div className={styles.cardHeader}>
              <div>
                <div className={styles.headerTitleStar}>
                  <Link
                    to={`${item.id}/${item.mapMarker.latLong.latitude}/${item.mapMarker.latLong.longitude}`}
                  >
                    <h1>{item.name}</h1>
                  </Link>

                  <p className={styles.userScore}>
                    User score {item.reviews.score}
                    <br></br>
                    {item.reviews.total + " " + "review"}
                  </p>
                </div>
              </div>
              <p>
                <CiBadgeDollar /> Collect stamps{" "}
              </p>
              <p>
                {item.destinationInfo.distanceFromMessaging !== null && (
                  <>
                    <CiLocationOn />{" "}
                    {item.destinationInfo.distanceFromMessaging}
                  </>
                )}
              </p>
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
                <Link
                  to={`${item.id}/${item.mapMarker.latLong.latitude}/${item.mapMarker.latLong.longitude}`}
                >
                  <div className={styles.priceContainer}>
                    <p className={styles.leadPrice}>
                      {item.price.lead?.formatted} <br />
                    </p>
                    <p className={styles.discountPrice}>
                      {item.price.lead?.formatted <
                        item.price.displayMessages[0].lineItems[0].price
                          .formatted &&
                        item.price.displayMessages[0].lineItems[0].price
                          .formatted}
                    </p>
                    <p className={styles.leadPrice}>Per night</p>
                    <button className={styles.viewDealBtn}>View Deal</button>
                  </div>
                </Link>
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

export default AutoItemLoder;
