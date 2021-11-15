/* eslint-disable import/no-anonymous-default-export */
import {
  WEATHER_SEARCH_SUCCESS,
  WEATHER_SEARCH_ERROR,
  WEATHER_FIVE_DAYS_SUCCESS,
  WEATHER_FIVE_DAYS_ERROR,
  WEATHER_CURRENT_SUCCESS,
  WEATHER_CURRENT_ERROR
} from '../types'

const initialState = {
  weatherSearchList: [],
  searchValue: '',
  weatherFiveDays: [],
  cuurWeatherKey: 0,
  currentWeatherItem: {},
  loading: true
}

export default function (state = initialState, action) {
  switch (action.type) {
    case WEATHER_SEARCH_SUCCESS:
      return {
        ...state,
        weatherSearchList: action.payload,
        searchValue: action.searchValue,
        loading: false
      }
    case WEATHER_SEARCH_ERROR:
      return {
        loading: false,
        error: action.payload
      }
    case WEATHER_FIVE_DAYS_SUCCESS:
      return {
        ...state,
        weatherFiveDays: action.payload,
        cuurWeatherKey: action.cuurWeatherKey,
        loading: false
      }
    case WEATHER_FIVE_DAYS_ERROR:
      return {
        loading: false,
        error: action.payload
      }
    case WEATHER_CURRENT_SUCCESS:
      return {
        ...state,
        currentWeatherItem: action.payload,
        cuurWeatherKey: action.cuurWeatherKey,
        loading: false
      }
    case WEATHER_CURRENT_ERROR:
      return {
        loading: false,
        error: action.payload
      }
    default:
      return state
  }
}
