import { createStore } from "redux";
import {
  LOADING,
  SET_CITIES,
  ADD_CITY,
  DELETE_CITY,
} from "../actions/citiesActions";

const initialState = {
  availableCities: [],
  loading: false,

};

const citiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING: {
      return {
        ...state,
        loading: true,
      };
    }
    case SET_CITIES: {
      return {
        ...state,
        availableCities: action.cities,
      };
    }
    case ADD_CITY: {
      const newCity = new City(
        action.cityData.cityId,
        action.cityData.cityName,
        action.cityData.cityCountry,
        action.cityData.weather,
        action.cityData.temprature,
        action.cityData.icon,
        action.cityData.wind,
        action.cityData.humidity
      );
      return {
        ...state,
        availableCities: state.availableCities.push(newCity),
      };
    }
    case DELETE_CITY: {
      return {
        ...state,
        availableCities: state.availableCities.filter(
          (city) => city.cityId !== action.cityId
        ),
      };
    }
    default:
      return state;
  }
};

const store = createStore(citiesReducer);

export default store;
