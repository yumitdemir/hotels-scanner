import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import styles from "./styles.module.css";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";

const Slideshow = ({ imgs }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setIndex(0);
  }, []);

  const next = () => {
    if (index === imgs.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };
  const prev = () => {
    if (index === 0) {
      setIndex(imgs.length - 1);
    } else {
      setIndex(index - 1);
    }
  };

  return (
    <div className={styles.slideshow}>
      <Thumbnail arr={imgs} image={setIndex} index={index} />
      <img className={styles.mainImg} src={imgs[index]} />
      <div className={styles.actions}>
        <button onClick={prev}>
          {" "}
          <GrFormPrevious />
        </button>
        <button onClick={next}>
          <GrFormNext />
        </button>
      </div>
    </div>
  );
};

const Thumbnail = ({ arr, image, index }) => {
  return (
    <div className={styles.tumbnail}>
      {arr.map((imgsrc, i) => (
        <img
          key={i}
          height="50vw"
          src={imgsrc}
          onClick={() => image(i)}
          className={index === i ? styles.active : ""}
        />
      ))}
    </div>
  );
};

function PhotoSlide({ imgss }) {
  return (
    <div className={styles.App}>
      <Slideshow imgs={imgss} />
    </div>
  );
}
export default PhotoSlide;
