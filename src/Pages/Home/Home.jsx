import React from "react";
import styles from "./styles.module.css";
import Search from "../../Components/Search/Search";
import { useState } from "react";

function Home(props) {
  const [location, setLocation] = useState("");
  const [inDate, setInDate] = useState("");
  const [outDate, setOutDate] = useState("");
  const [locationId, setLocationId] = useState();
  return (
    <div className={styles.Home}>
      <div className={styles.homeDescription}>
        <h1>Hotel Price Comparison</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit cum
          consectetur excepturi ea perferendis tempore nam laborum nisi?
          Dignissimos adipisci ipsam, distinctio, similique architecto sunt in
          dolor nesciunt sit iusto omnis ad a
        </p>
      </div>
      <Search
        location={location}
        setLocation={setLocation}
        inDate={inDate}
        setInDate={setInDate}
        outDate={outDate}
        setOutDate={setOutDate}
        locationId={locationId}
        setLocationId={setLocationId}
      />
    </div>
  );
}

export default Home;
