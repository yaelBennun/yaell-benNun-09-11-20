import { combineReducers } from 'redux'
import weatherReducer from './weatherReducer'
import favoritesWeatherReducer from './favoritesWeatherReducer'

export default combineReducers({
  weatherSearchList: weatherReducer,
  weatherFavoritesList: favoritesWeatherReducer
})
