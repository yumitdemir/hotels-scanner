import React from "react";
import styles from "./styles.module.css";
import shortid from "shortid";

function AutoReviewLoader({ reviewsData }) {
  console.log(reviewsData, "dsadsada");
  return (
    <>
      {reviewsData.map((item) => {
        return (
          <div key={shortid.generate()} className={styles.reviewItem}>
            <p className={styles.score}>
              {item.reviewScoreWithDescription.value}
            </p>
            <p className={styles.date}>{item.submissionTimeLocalized}</p>
            <p className={styles.text}>{item.text}</p>
          </div>
        );
      })}
    </>
  );
}

export default AutoReviewLoader;
