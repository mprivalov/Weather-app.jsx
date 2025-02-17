import React from "react";

const TimeAndLocation = ({weather: {formattedLocalTime, name, country}}) => {
  return (
    <div>
      <div className="flex items-center justify-center my-1">
        <p className="text-md sm:text-lg font-extralight">{formattedLocalTime}</p>
      </div>

      <div className="flex items-center justify-center my-1 sm:my-2">
        <p className="text-xl sm:text-2xl font-medium">{name}, {country}</p>
      </div>
    </div>
  );
};

export default TimeAndLocation;
