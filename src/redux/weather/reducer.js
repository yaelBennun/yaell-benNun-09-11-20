import { WEATHER_SEARCH_SUCCESS } from "./constants";

const initialState = {
  weatherSearchList: []
};

const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case WEATHER_SEARCH_SUCCESS:
      return {
        ...state,
        weatherSearchList: action.payload.weatherSearchList,
      };
    default:
      return state;
  }
};

export default weatherReducer;
