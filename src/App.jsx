import styles from "./styles.module.css";
import { Routes, Route } from "react-router-dom";

import HotelList from "./Pages/HotelList/HotelList";
import Home from "./Pages/Home/Home";
import Nav from "./Components/Nav/Nav";
import HotelDetails from "./Pages/HotelDetails/HotelDetails";

function App() {
  return (
    <div className={styles.app}>
      <Nav className={styles.nav} />
      <div className={styles.content}>
        <Routes>
          <Route path="/hotels-scanner" element={<Home />} />
          <Route
            path="hotels-scanner/:cityname/:id/:checkIn/:checkOut"
            element={<HotelList />}
          />
          <Route
            path="hotels-scanner/:cityname/:id/:checkIn/:checkOut/:propertieId/:lat/:lon"
            element={<HotelDetails />}
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
