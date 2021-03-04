import React, { useState, useEffect } from "react";
import {
  FaArrowCircleDown,
  FaArrowAltCircleUp,
  FaArrowCircleUp,
} from "react-icons/fa";
import { FiRefreshCcw } from "react-icons/fi";
import { TiWeatherSunny, TiWeatherNight } from "react-icons/ti";

function App() {
  const [click, setClick] = useState(false);
  const [nightTime, setNightTime] = useState(false);
  let day;
  const time = new Date().getHours();
  const Minute = new Date().getMinutes();
  if (time > 0 && time <= 4 && time > 21) {
    day = "good night";
    setNightTime(true);
  } else if (time > 4 && time <= 12) {
    day = "good Morning";
    setNightTime(false);
  } else if (time > 12 && time <= 17) {
    day = "good afternoon";
  } else if (time > 17 && time <= 21) {
    day = "good evening";
  }

  useEffect(() => {
    const timer = setInterval(() => Minute, 60000);
    return () => {
      clearInterval(timer);
    };
  }, [Minute]);

  return (
    <>
      <div className={`${nightTime ? "container night" : "container"}`}>
        <div className="container-center">
          <div className="upper-container">
            <div className={`${click ? "quotes hide" : "quotes"}`}>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Dolores deleniti quae, repellendus libero officia nostrum optio,
                error eius dolorum consectetur labore debitis! Maxime dolore
                animi aliquam iusto facere voluptates culpa?
                <h3 className="author">author</h3>
              </p>
              <FiRefreshCcw className="refresh" />
            </div>
            <div className={`${click ? "time time-show" : "time"}`}>
              <div className="time-info">
                <h2>
                  <TiWeatherSunny /> {day}
                </h2>
                <h1>
                  {time}:{Minute} <span>IST</span>
                </h1>
                <h2 className="timezone">IN AGRA, INDIA</h2>
              </div>
              <button onClick={() => setClick(!click)}>
                {click ? "LESS" : "More"}
                {click ? <FaArrowCircleUp /> : <FaArrowCircleDown />}
              </button>
            </div>
          </div>
        </div>
        <div
          className={`${click ? "bottom-container show" : "bottom-container"}`}
        >
          <div className="bottom-center">
            <div className="details">
              <h3>Current TimeZone</h3>
              <h2>INDIA</h2>
            </div>
            <div className="details">
              <h3>Day of the year</h3>
              <h2>295</h2>
            </div>
            <div className="details">
              <h3>Day of the week</h3>
              <h2>5</h2>
            </div>
            <div className="details">
              <h3>week number</h3>
              <h2>42</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
