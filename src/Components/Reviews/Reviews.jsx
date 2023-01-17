import React, { useState } from "react";
import styles from "./styles.module.css";
import AutoReviewLoader from "../AutoReviewLoader/AutoReviewLoader";
import { useEffect } from "react";
import { GrCircleInformation } from "react-icons/gr";
import axios from "axios";
import shortid from "shortid";

function Reviews({ propertieDetails }) {
  const [reviewsData, setReviewsData] = useState([]);

  useEffect(() => {
    const options = {
      method: "POST",
      url: "https://hotels4.p.rapidapi.com/reviews/v3/list",
      headers: {
        "content-type": "application/json",
        "X-RapidAPI-Key": "9159b6f10dmsh11cd975195be1ccp1dff76jsn0b83aa1105eb",
        "X-RapidAPI-Host": "hotels4.p.rapidapi.com",
      },
      data: '{"currency":"USD","eapid":1,"locale":"en_US","siteId":300000001,"propertyId":"9209612","size":10,"startingIndex":0}',
    };

    axios
      .request(options)
      .then(function (response) {
        setReviewsData(response.data.data?.propertyInfo?.reviewInfo?.reviews);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h1 className={styles.reviewsTitle}>Reviews</h1>
      <div className={styles.gridContainer}>
        <div>
          <div>
            <div className={styles.mainScoreDiv}>
              <p className={styles.mainScore}>
                {
                  propertieDetails.reviewInfo?.summary?.overallScoreWithDescriptionA11y?.value?.split(
                    "/"
                  )[0]
                }
              </p>
              <div className={styles.reviewCount}>
                <p>
                  {
                    propertieDetails.reviewInfo?.summary?.highlightMessage?.subtitle?.text?.split(
                      " "
                    )[0]
                  }{" "}
                  reviews
                </p>
                <p>
                  Verified reviews <GrCircleInformation />
                </p>
              </div>
            </div>
            <div className={styles.ulContainer}>
              <ul>
                <li>
                  <p className={styles.score}>6.1/10</p>
                  <p>Cleanliness</p>
                </li>
                <li>
                  <p className={styles.score}>6.1/10</p>
                  <p>Amenities</p>
                </li>
                <li>
                  <p className={styles.score}>6.1/10</p>
                  <p>Eco-friendliness</p>
                </li>
              </ul>
              <ul>
                <li>
                  <p className={styles.score}>6.1/10</p>
                  <p> Staff & service</p>
                </li>
                <li>
                  <p className={styles.score}>6.1/10</p>
                  <p>Property conditions & facilities</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <AutoReviewLoader reviewsData={reviewsData} />
          <button className={styles.seeAllReviews}>See all reviews</button>
        </div>
      </div>
    </div>
  );
}

export default Reviews;
