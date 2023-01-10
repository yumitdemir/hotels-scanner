import styles from "./styles.module.css";
import { Routes, Route } from "react-router-dom";
import HotelList from "./Components/HotelList/HotelList";

import Home from "./Components/Home/Home";
import Nav from "./Components/Nav/Nav";

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id/:checkIn/:checkOut" element={<HotelList />} />
      </Routes>
    </div>
  );
}

export default App;
