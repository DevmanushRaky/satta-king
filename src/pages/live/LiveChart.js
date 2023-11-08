import React, { useState, useEffect } from 'react';
import "./LiveChart.css"

function DataList() {
  const [data, setData] = useState([
    { location: 'DISAWER', value: 10 },
    { location: 'PUNE CITY', value: 45 },
    { location: 'RANCHI', value: 10 },
    { location: 'GALI', value: 59 },
  ]);
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      const newDate = new Date();
      setCurrentDateTime(newDate);
      // Update the data with new values here (e.g., from an API).
    }, 1000); // Update every second

    console.log(setData)  // just for remove warning
    // Cleanup the interval on unmount
    return () => clearInterval(timer);

  }, []);

  // Create a function to get the month name, date, and time from the currentDateTime
  const getCurrentDateTimeString = () => {
    const monthNames = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
    const month = monthNames[currentDateTime.getMonth()];
    const date = currentDateTime.getDate();
    const time = currentDateTime.toLocaleTimeString();
    return `${month} ${date}, ${time}`;
  };

  return (
    <div className='live-chart'>
      <h1> SATTA KING </h1>
      <p className='current-time'>{getCurrentDateTimeString()}</p>
      <ul type="none">
        {data.map((item, index) => (
          <li className="current-city" key={index}>
            <strong>{item.location}: {item.value}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DataList;
