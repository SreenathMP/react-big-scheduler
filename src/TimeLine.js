import moment from "moment";
import React, { useEffect, useState } from "react";

const TimeLine = (props) => {
  const [currentTime, setCurrentTime] = useState(moment());
  const { maxWidth } = props;

  const getCurrentTimePosition = (hour, min) => {
    return hour * (maxWidth / 24) + ((min / 60) * maxWidth) / 24;
  };

  useEffect(() => {
    const intervalId = setInterval(() => setCurrentTime(moment()), 10000);
    return () => clearInterval(intervalId);
  });

  return (
    <React.Fragment>
      <div
        className="timeMark"
        style={{
          width: getCurrentTimePosition(
            moment().format("HH"),
            moment().format("mm")
          ),
        }}
      >
        <React.Fragment>
          <div className="timeMarkPoint" />
          <span className="timeText"> {currentTime.format("h:mm a")} </span>
        </React.Fragment>
        )
      </div>
    </React.Fragment>
  );
};
export default TimeLine;
