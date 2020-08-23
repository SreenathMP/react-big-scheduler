import moment from "moment";
import React, { useEffect, useState } from "react";

const TimeLine = (props) => {
  const [currentTime, setCurrentTime] = useState(moment());
  const { startTime, endTime, maxWidth } = props;
  const progress = currentTime.diff(startTime) / endTime.diff(startTime);
  const width = Math.min(Math.round(progress * maxWidth), maxWidth);

  const isBeforeToday = currentTime.isAfter(endTime);
  const isAfterToday = currentTime.isBefore(startTime);

  useEffect(() => {
    const intervalId = setInterval(() => setCurrentTime(moment()), 10000);
    return () => clearInterval(intervalId);
  });

  return (
    <React.Fragment>
      {!isAfterToday && (
        <div
          className="timeMark"
          style={isBeforeToday ? { width, border: "none" } : { width }}
        >
          {!isBeforeToday && (
            <React.Fragment>
              <div className="timeMarkPoint" />
              <span className="timeText"> {currentTime.format("h:mm a")} </span>
            </React.Fragment>
          )}
        </div>
      )}
    </React.Fragment>
  );
};
export default TimeLine;
