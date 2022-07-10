import banner from './Capture.png';
import plant from './plant.png';
import './App.css';
import { React, useState, useEffect } from 'react'
import { DateTime, Interval } from "luxon";

function App() {


  const moveInDate = DateTime.local(2022, 7, 7);
  const [today, setToday] = useState(DateTime.now());
  const timeSurvived = Interval.fromDateTimes(moveInDate, today);

  const days = Math.trunc(timeSurvived.length('days'))
  const hours = DateTime.local(timeSurvived).hour
  const minutes = DateTime.local(timeSurvived).minute
  const seconds = DateTime.local(timeSurvived).second

  useEffect(() => {
    const interval = setInterval(() => setToday(DateTime.now()), 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="container">

<nav className="navbar navbar-expand-lg">
  <div className="container-fluid">
    <a className="navbar-brand" href="https://www.youtube.com/c/LudiXP">    
    <img src={banner} alt="logo" width="50%"/>
</a>
    <div className="collapse navbar-collapse" id="navbarText">
      <span className="navbar-text">
        LudiXP Public Announcement
      </span>
    </div>
  </div>
</nav>
<div className="container2">

<div className="center">

<div className="card mb-3 cardContainer">
  <div className="row g-0">
    <div className="col-md-4">
      <img src={plant} className="test rounded-start" alt="..." />
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">I am Lofty</h5>
        <p className="card-text">I moved in with LudiXP on {moveInDate.toLocaleString(DateTime.DATETIME_FULL)}.</p>
        <p className="card-text"><small className="text-muted">The current date is {today.toLocaleString()}.</small></p>
        <p className="card-text"><small className="text-muted">I have survived {" "}
          {days} days, {" "}
          {hours} hours, {" "}
          {minutes} minutes, and {" "}
          {seconds} seconds.</small>
        </p>
        <p className="card-text"><small className="text-muted">
          Please check in on me to make sure I am safe by watching Lockn' It Down With Lucy Every Thursday at 8pm!
          </small>
        </p>
        <a href="https://www.youtube.com/c/LudiXP" className="btn btn-primary">LudiXP</a>
      </div>
    </div>
  </div>
</div>    </div>
</div>

     </div>
  );
}

export default App;
