import { useState } from "react";

import "./App.css";

// import MapComponent from './component/Static_Map'
import "./styleCss/Batt.css";
import Navbar from "./component/Nav-main";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Overview from "./pages/Overview";
import Graph from "./pages/Graph";
import MapNode from "./pages/MapNode";

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Haangmai Dumdum");
  const [isTrue, setIsTrue] = useState(true);

  const user = {
    firstName: "Thanawat",
    lastName: "Mango",
    // img : haangMai
  };

  return (
    <div className="App">
        <BrowserRouter>
      <section className="nav-container">
          <Navbar />
      </section>
          <Routes>
            <Route path="/" element={<Overview />} />
            <Route path="/graph" element={<Graph />} />
            <Route path="/mapnode" element={<MapNode />} />
          </Routes>
        </BrowserRouter>

      {/* <h1 style={{ marginTop: "150px", textAlign: "center" }}>Welcome!</h1> */}

      {/* <BatteryIndicator/> */}
      {/* <MapComponent/> */}
      {/* <GoogleMapComponent /> */}
      {/* <Myprofile userPacket = {user}/> */}
      {/* <MapComponent/> */}
      {/* <GoogleMapsProvider/> */}

      {/* <Home /> */}
      {/* <Page2 /> */}
      {/* </GoogleMapsProvider> */}
    </div>
  );
}

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<App />);
export default App;
