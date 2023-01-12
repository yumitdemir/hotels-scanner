import styles from "./styles.module.css";
import { Routes, Route } from "react-router-dom";
import HotelList from "./Pages/HotelList/HotelList";

import Home from "./Pages/Home/Home";
import Nav from "./Components/Nav/Nav";

function App() {
  return (
    <div className={styles.app}>
      <Nav className={styles.nav} />
      <div className={styles.content}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path=":cityname/:id/:checkIn/:checkOut"
            element={<HotelList />}
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
