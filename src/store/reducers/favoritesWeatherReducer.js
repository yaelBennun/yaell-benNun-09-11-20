/* eslint-disable import/no-anonymous-default-export */
import {
  ADD_WEATHER_FAVORITE_SUCCESS,
  REMOVE_WEATHER_FAVORITE_SUCCESS,
  WEATHER_CURRENT_SUCCESS,
  ADD_WEATHER_FAVORITES_ERROR,
  REMOVE_WEATHER_FAVORITES_ERROR,
  WEATHER_CURRENT_ERROR
} from '../types'

const initialState = {
  weatherFavoritesList: [],
  favoritesListLength: 0,
  cuurWeatherKey: 0,
  loading: true
}
export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_WEATHER_FAVORITE_SUCCESS:
      return {
        ...state,
        weatherFavoritesList: [...state.weatherFavoritesList, action.payload],
        favoritesListLength: state.favoritesListLength + 1,
        loading: false
      }
    case ADD_WEATHER_FAVORITES_ERROR:
      return {
        loading: false,
        error: action.payload
      }
    case REMOVE_WEATHER_FAVORITE_SUCCESS:
      return {
        ...state,
        weatherFavoritesList: state.weatherFavoritesList.filter(
          (favorite) => favorite.cityKey !== action.payload
        ),
        favoritesListLength: state.favoritesListLength - 1,
        loading: false
      }
    case REMOVE_WEATHER_FAVORITES_ERROR:
      return {
        loading: false,
        error: action.payload
      }
    case WEATHER_CURRENT_SUCCESS:
      return {
        ...state,
        cuurWeatherKey: action.cuurWeatherKey
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
