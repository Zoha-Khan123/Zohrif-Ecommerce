import React from "react";

const Timer = () => {
  return (
    <>
      {/* Timer */}
      <div className="timer-box">
         
        <div>
          <p className="timer-day">Days</p>
          <div className="timer-count-and-colon">
            <p className="timer-count">03</p>
            <p className="colon">:</p>
          </div>
        </div>

        <div>
          <p className="timer-day">Hours</p>
          <div className="timer-count-and-colon">
            <p className="timer-count">23</p>
            <p className="colon">:</p>
          </div>
        </div>

        <div>
          <p className="timer-day">Minutes</p>
          <div className="timer-count-and-colon">
            <p className="timer-count">19</p>
            <p className="colon">:</p>
          </div>
        </div>

        <div>
          <p className="timer-day">Seconds</p>
          <div className="timer-count-and-colon">
            <p className="timer-count">56</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Timer;
