import { useState } from "react";
import { BiSearch, BiCurrentLocation } from "react-icons/bi";

const Inputs = ({ setQuery, setUnits }) => {
  const [city, setCity] = useState("");

  const handleSearchClick = (e) => {
    e.preventDefault();
    if (city !== "") setQuery({ q: city });
  };

  const handleLocationClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        setQuery({ lat: latitude, lon: longitude });
      });
    }
  };

  return (
    <div className="flex flex-row justify-center my-5">
      <div className="flex flex-row w-4/5 items-center justify-center space-x-4">
        <form
          className="flex flex-row items-center w-full space-x-4"
          onSubmit={handleSearchClick}
        >
          <input
            value={city}
            onChange={(e) => setCity(e.currentTarget.value)}
            type="text"
            placeholder="Search..."
            className="w-full text-gray-600 text-md sm:text-lg font-light p-1 sm:p-2 shadow-md sm:shadow-xl capitalize focus:outline-none"
          />

          <BiSearch
            type="submit"
            // size={30}
            className="size-6 sm:size-8 cursor-pointer transition ease-out hover:scale-125"
            onClick={handleSearchClick}
          />
        </form>
        
          <BiCurrentLocation
            // size={30}
            className="size-6 sm:size-8 cursor-pointer transition ease-out hover:scale-125"
            onClick={handleLocationClick}
          />
     
      </div>
      <div className="flex flex-row w-1/5 items-center justify-end">
        <button
          className="text-xl sm:text-2xl font-medium transition ease-out hover:scale-125"
          onClick={() => setUnits("metric")}
        >
          °C
        </button>
        <p className="text-xl sm:text-2xl font-medium mx-1">|</p>
        <button
          className="text-xl sm:text-2xl font-medium transition ease-out hover:scale-125"
          onClick={() => setUnits("imperial")}
        >
          °F
        </button>
      </div>
    </div>
  );
};

export default Inputs;
