import React, { useReducer } from "react";

const WeatherContext = React.createContext();

let initialCities = [
  {
    cityId: "264371",
    cityName: "Athens",
    cityCountry: "GR",
  },
  {
    cityId: "3553478",
    cityName: "Havana",
    cityCountry: "CU",
  },
  {
    cityId: "5368381",
    cityName: "Los Angeles",
    cityCountry: "US",
  },
  {
    cityId: "1850147",
    cityName: "Tokyo",
    cityCountry: "JP",
  },
];

const cityReducer = (state, action) => {
  switch (action.type) {
    case "ADD_CITY":
      return [...state, action.payload];
    case "DELETE_CITY":
      return [state.filter((city) => city.cityId !== action.payload)];
    default:
      return state;
  }
};

export const WeatherProvider = ({ children }) => {
  const [cityList, dispatch] = useReducer(cityReducer, initialCities);

  const addCity = () => {
    dispatch({ type: "ADD_CITY", payload });
  };

  const deleteCity = () => {
    dispatch({ type: "DELETE_CITY", payload });
  };

  return (
    <WeatherContext.Provider
      value={{ data: cityList, addCity, deleteCity }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

export default WeatherContext;
