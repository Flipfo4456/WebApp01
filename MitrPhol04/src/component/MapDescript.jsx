import React from "react";
import BatteryIndicator from "./Battery";
import '../styleCss/Descript.css'

const MapDescript = ({ batteryLevel, soilMoisture }) => {
  return (
    <div className="info">
      {batteryLevel !== null ? (
        <div>
          <BatteryIndicator level={batteryLevel} />
          <h3>Soil Moisture: {soilMoisture}%</h3>
        </div>
      ) : (
        <h3>"Click any sensor.."</h3>
      )}
    </div>
  );
};

export default MapDescript;
