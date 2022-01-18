import React, { useState } from "react";

function App() {
  setInterval(refreshTime, 1000);
  //refreshTime gets called every second
  let now = new Date().toLocaleTimeString("en-GB");

  const [time, setTime] = useState(now);

  function refreshTime() {
    const newTime = new Date().toLocaleTimeString("en-GB");
    setTime(newTime);
  }
  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={refreshTime}>Clock</button>
    </div>
  );
}

export default App;
