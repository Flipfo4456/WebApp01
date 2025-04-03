import { useState, useEffect } from "react";
import '../styleCss/Batt.css'

const BatteryIndicator = ({ level }) => {
  if (level === undefined || level === null) {
    return <p>Battery data unavailable</p>;
  }

  let batteryStatus = "Excellent condition!";
  let statusColor = "bg-green-200 text-green-800 font-bold";
  let batteryColor = "#6CDD47"; // Green

  if (level <= 15) {
    batteryColor = "#FF3B30"; // Red
    batteryStatus = "Critical! Please Check.";
    statusColor = "bg-red-200 text-red-800 font-bold";
  } else if (level <= 50) {
    batteryColor = "#FFD700"; // Yellow
    batteryStatus = "Battery is in fair condition";
    statusColor = "bg-yellow-200 text-yellow-800 font-bold";
  } else if (level <= 80) {
    batteryStatus = "Battery is in good condition";
    statusColor = "bg-green-200 text-green-800 font-bold";
  }

  return (
    <>
    <div className="bg-batt">

      <div className="battery-container">
        {/* Battery Case */}
        <div className="battery-frame">
          {/* Dynamic Battery Level Bar */}
          <div
            className="battery-fill"
            style={{
              width: `${level}%`, // Width scales with battery percentage
              backgroundColor: batteryColor,
            }}
            ></div>
        </div>
        {/* Battery Tip */}
        <div className="battery-tip"></div>
      </div>

      <div className="Text-batt-container">
        {/* Battery Percentage */}
        <p className="battery-text">Current Battery: {level}%</p>

        {/* Battery Status Message */}
        <div className={`status-message ${statusColor} p-4 mt-2 rounded-md text-center`}>
          {batteryStatus}
        </div>
      </div>
    
    </div>
      
    </>
  );
};

export default BatteryIndicator;