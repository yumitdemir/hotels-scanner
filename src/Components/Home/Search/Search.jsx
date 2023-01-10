import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

import SearchBox from "./SearchBox/SearchBox";

function Search(props) {
  const [location, setLocation] = useState("");
  const [inDate, setInDate] = useState("");
  const [outDate, setOutDate] = useState("");
  return (
    <div>
      <SearchBox location={location} setLocation={setLocation} />

      <input
        type="date"
        value={inDate}
        onChange={(e) => {
          setInDate(e.target.value);
        }}
      />
      <input
        type="date"
        value={outDate}
        onChange={(e) => {
          setOutDate(e.target.value);
        }}
      />
      <Link to={`/${location}/${inDate}/${outDate}`}>
        <button>Submit</button>
      </Link>
    </div>
  );
}

export default Search;
