import APIkey from "../../../APIkey";
import City from "../../models/city";
import initialCitiesIds from "../../data/initialCitiesIds";

export const SET_CITIES = "SET_CITIES";
export const GET_CITIES = "GET_CITIES";
export const ADD_CITY = "ADD_CITY";
export const DELETE_CITY = "DELETE_CITY";

export const setCities = (initialCitiesIds) => {
  // async code here
  return async (dispatch) => {
    const loadedCities = [];
    for (let i = 0; i < initialCitiesIds.length; i++) {
      try {
        const response = await fetch(
          `api.openweathermap.org/data/2.5/forecast?id=${initialCitiesIds[i]}&appid=${APIkey}`
        );

        if (!response.cod != 200) throw new Error("Something went wrong");

        const resData = await response.json();
        //TODO
        loadedCities.push(new City());
      } catch {}
    }
    dispatch({ type: SET_CITIES, payload: initialCities });
  };
};

export const fetchCity = (cityName) => {
  return async (dispatch) => {
    const response = await fetch(
      `api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${APIkey}`
    );
    const resData = await response.json()
    dispatch({ type: ADD_CITY, cityData: {
      cityId: resData.city.id,
      cityName,
      cityCountry: resData.city.country,
      weather: resData.list[0].weather[0].main,
      temprature: resData.list[0].main.temp,
      icon: resData.list[0].weather[0].icon,
      wind: resData.list[0].wind.speed,
      humidity: resData.list[0].main.humidity
    } });
  };
};

export const deleteCity = (cityId) => {
  dispatch({ type: DELETE_CITY, cityId });
};
