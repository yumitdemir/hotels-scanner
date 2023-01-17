import React from "react";
import shortid from "shortid";
import styles from "./styles.module.css";
import Reviews from "../Reviews/Reviews";

function HotelDetailsSummary({ propertieDetails, lat, lon }) {
  const MyIcons = [
    "airport_shuttle",
    "airport_shuttle",
    "fitness_center",
    "free_breakfast",
    "hot_tub",
    "kitchen",
    "local_activity",
    "local_bar",
    "local_laundry_service",
    "local_parking",
    "pets",
    "pool",
    "room",
    "smoke_free",
    "temperature",
    "wifi",
  ];

  const iconCheck = (item) => {
    console.log(item);
    if (MyIcons.find((element) => element === item)) {
      return item;
    } else {
      return "done";
    }
  };

  return (
    <div className={styles.HotelDetailsSummary}>
      <div className={styles.LoremDiv}>
        <h1>Lorem Ipsum</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae, ipsam
          libero. Nostrum, porro fugiat cumque quis adipisci omnis impedit
          soluta consequatur accusamus iure quibusdam voluptas corrupti dolorem
          hic alias, aspernatur obcaecati eos! Deserunt, quod omnis commodi
          incidunt cumque assumenda iure culpa atque perspiciatis dolores
          consectetur corporis ipsam! Quam eos praesentium fuga! Rerum vel odit
          laboriosam animi possimus est asperiores ut voluptatum nihil,
          voluptatibus itaque, inventore corrupti, distinctio quisquam corporis
          non. Facilis cumque voluptas libero optio aperiam vel totam. Itaque
          nesciunt quisquam labore, temporibus, in, earum cum voluptatibus
          consequuntur error maxime mollitia sapiente quos. Deserunt porro
          debitis illo eos officiis neque quasi eaque consequuntur deleniti
          quisquam aliquid totam facere dolorem, soluta tempora nisi dicta natus
          ipsa nihil exercitationem ut maxime. Temporibus quod eum dicta, nam
          soluta iste a ratione sapiente, id consectetur asperiores fuga
          incidunt omnis doloremque! Qui nemo quaerat magni dolor blanditiis
          totam aspernatur quos, aliquid, cumque sunt, neque maiores!
        </p>
      </div>
      <div className={styles.LoremDiv}>
        <h1>Lorem Ipsum</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae, ipsam
          libero. Nostrum, porro fugiat cumque quis adipisci omnis impedit
          soluta consequatur accusamus iure quibusdam voluptas corrupti dolorem
          hic alias, aspernatur obcaecati eos! Deserunt, quod omnis commodi
          incidunt cumque assumenda iure culpa atque perspiciatis dolores
          consectetur corporis ipsam! Quam eos praesentium fuga! Rerum vel odit
          laboriosam animi possimus est asperiores ut voluptatum nihil,
          voluptatibus itaque, inventore corrupti, distinctio quisquam corporis
          non. Facilis cumque voluptas libero optio aperiam vel totam. Itaque
          nesciunt quisquam labore, temporibus, in, earum cum voluptatibus
          consequuntur error maxime mollitia sapiente quos. Deserunt porro
          debitis illo eos officiis neque quasi eaque consequuntur deleniti
          quisquam aliquid totam facere dolorem, soluta tempora nisi dicta natus
          ipsa nihil exercitationem ut maxime. Temporibus quod eum dicta, nam
          soluta iste a ratione sapiente, id consectetur asperiores fuga
          incidunt omnis doloremque! Qui nemo quaerat magni dolor blanditiis
          totam aspernatur quos, aliquid, cumque sunt, neque maiores!
        </p>
      </div>
      <div className={styles.amenitiesDiv}>
        <h1>{propertieDetails.summary.amenities.topAmenities.header.text}</h1>
        <ul className={styles.amenitiesList}>
          {propertieDetails.summary.amenities.topAmenities.items.map((item) => {
            return (
              <li key={shortid.generate()}>
                <img
                  onError={(event) => {
                    event.target.src = "";
                  }}
                  src={require(`../../Icons/${iconCheck(item.icon.id)}.png`)}
                  alt=""
                />
                <p> {item.text}</p>
              </li>
            );
          })}
        </ul>
      </div>
      <div>
        <Reviews propertieDetails={propertieDetails} />
      </div>

      <iframe
        className={styles.map}
        src={`https://maps.google.com/maps?q=${lat}, ${lon}&z=15&output=embed`}
        frameBorder="0"
        style={{ border: 0 }}
        allowFullScreen=""
        aria-hidden="false"
        tabIndex="0"
      />
    </div>
  );
}

export default HotelDetailsSummary;
