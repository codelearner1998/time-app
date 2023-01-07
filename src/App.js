import React, { useState } from "react";

function App() {

  setInterval(handleClick , "1000")
  

  const now = new Date().toLocaleTimeString();

  const [time, UpdatedTime] = useState(now);


  function handleClick() {
    const newTime = new Date().toLocaleTimeString();

    UpdatedTime(newTime);

   
  }

  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={handleClick}>Get Time</button>
    </div>
  );
}

export default App;
