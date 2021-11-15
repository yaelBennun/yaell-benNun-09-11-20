//add or remove from favorites list
//
import {
  ADD_WEATHER_FAVORITE_SUCCESS,
  REMOVE_WEATHER_FAVORITE_SUCCESS,
  ADD_WEATHER_FAVORITES_ERROR,
  REMOVE_WEATHER_FAVORITES_ERROR
} from '../types'

export const addItemFromFavorites = (currWether) => (dispatch) => {
  dispatch({
    type: ADD_WEATHER_FAVORITE_SUCCESS,
    payload: currWether
  })
}
export const deleteItemFromFavorites = (cityKey) => (dispatch) => {
  dispatch({
    type: REMOVE_WEATHER_FAVORITE_SUCCESS,
    payload: cityKey
  })
}
