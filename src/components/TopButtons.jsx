import React from "react";

const TopButtons = ({ setQuery }) => {
  const cities = [
    {
      id: 1,
      name: "London",
    },
    {
      id: 2,
      name: "Moscow",
    },
    {
      id: 3,
      name: "Madrid",
    },
    {
      id: 4,
      name: "New York",
    },
    {
      id: 5,
      name: "Berlin",
    },
  ];

  return (
    <div className="flex items-center justify-around ">
      {cities.map((city) => (
        <button
          key={city.id}
          className="text-lg font-medium hover:bg-gray-700 px-3 py-2 rounded-md transition ease-in"
          onClick={() => setQuery({ q: city.name })}
        >
          {city.name}
        </button>
      ))}
    </div>
  );
};

export default TopButtons;
