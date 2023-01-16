import React from "react";
import styles from "./styles.module.css";
import { AiFillStar, AiOutlineArrowDown } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import { useParams } from "react-router-dom";

function HotelDetailsHeader({ propertieDetails }) {
  const { cityname } = useParams();
  const starRating = (number) => {
    number = Math.round(number);
    if (number === 1) {
      return (
        <>
          <AiFillStar />
        </>
      );
    } else if (number === 2) {
      return (
        <>
          <AiFillStar />
          <AiFillStar />
        </>
      );
    } else if (number === 3) {
      return (
        <>
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </>
      );
    } else if (number === 4) {
      return (
        <>
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </>
      );
    } else if (number === 5) {
      return (
        <>
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </>
      );
    }
  };
  return (
    <div className={styles.header}>
      <div className={styles.nameAndStar}>
        <h1>{propertieDetails.summary.name}</h1>
        <div>
          {starRating(propertieDetails.summary.overview.propertyRating.rating)}
        </div>
      </div>
      <div>
        <p>
          <CiLocationOn /> {cityname} ,{" "}
          {
            <a href="">
              Show On Map <AiOutlineArrowDown />
            </a>
          }
        </p>
      </div>
    </div>
  );
}

export default HotelDetailsHeader;
