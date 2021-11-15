import {
  WEATHER_SEARCH_SUCCESS,
  WEATHER_SEARCH_ERROR,
  WEATHER_FIVE_DAYS_SUCCESS,
  WEATHER_FIVE_DAYS_ERROR,
  WEATHER_CURRENT_SUCCESS,
  WEATHER_CURRENT_ERROR
} from '../types'
import axios from 'axios'
import { WEATHER_URLS, BASE_URL } from '../../services/api'
const apiKey = 'b5su52iphyCXS22mUWIxSTGt0U6juE2Y'

// get autocomplete list from search value
export const getWeatherListSearch = (searchInput) => async (dispatch) => {
  const request = {
    apikey: apiKey,
    q: searchInput
  }
  try {
    const res = await axios.get(
      `${BASE_URL + WEATHER_URLS.SEARCH_CITIES_AUTOCOMPLETE}?apikey=${
        request.apikey
      }&q=${request.q}&language=en-us`
    )
    dispatch({
      type: WEATHER_SEARCH_SUCCESS,
      payload: res.data,
      searchValue: searchInput
    })
  } catch (error) {
    dispatch({
      type: WEATHER_SEARCH_ERROR,
      payload: error
    })
  }
}
//get forecats five days of current weather display and fromat before dispatch
export const getWeatherFiveDays = (cityKey) => async (dispatch) => {
  console.log(cityKey)
  const request = {
    apikey: apiKey,
    cityKey
  }
  try {
    const res = await axios.get(
      `${
        BASE_URL + WEATHER_URLS.FIVE_DAYS_FORECASTS + request.cityKey
      }?apikey=${request.apikey}&language=en-us&details=false&metric=false`
    )
    const resData = res.data
    var days = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday'
    ]
    //DailyForecasts
    const formatedWeatherArray = []
    resData.DailyForecasts.forEach((v) => {
      let a = new Date(v.EpochDate * 1000)
      let obj = {}
      obj.dayOfWeek = days[a.getDay()]
      obj.temperature = v.Temperature
      formatedWeatherArray.push(obj)
      console.log(obj)
    })
    dispatch({
      type: WEATHER_FIVE_DAYS_SUCCESS,
      payload: formatedWeatherArray,
      cuurWeatherKey: request.cityKey
    })
  } catch (error) {
    dispatch({
      type: WEATHER_FIVE_DAYS_ERROR,
      payload: error
    })
  }
}
// get current condition
export const getCurrentWeather =
  ({ cityKey, localizedName }) =>
  async (dispatch) => {
    const request = {
      apikey: apiKey,
      cityKey
    }
    try {
      const res = await axios.get(
        `${
          BASE_URL + WEATHER_URLS.CURRENT_CONDITIONS + request.cityKey
        }?apikey=${request.apikey}&language=en-us&details=false&metric=false`
      )
      const resData = res.data
      console.log(resData[0])
      let currWether = {
        cityKey,
        localizedName,
        weatherText: resData[0].WeatherText,
        temperature: resData[0].Temperature
      }
      dispatch({
        type: WEATHER_CURRENT_SUCCESS,
        payload: currWether,
        cuurWeatherKey: request.cityKey
      })
    } catch (error) {
      dispatch({
        type: WEATHER_CURRENT_ERROR,
        payload: error
      })
    }
  }
export const getWeatherItemFormat = () => async (dispatch) => {}

// import {
//   WEATHER_SEARCH_SUCCESS,
//   WEATHER_SEARCH_ERROR,
//   WEATHER_FIVE_DAYS_SUCCESS,
//   WEATHER_FIVE_DAYS_ERROR,
//   WEATHER_CURRENT_SUCCESS,
//   WEATHER_CURRENT_ERROR
// } from '../types'
// import axios from 'axios'
// import { WEATHER_URLS, BASE_URL } from '../../services/api'
// import MainConfig from '../../config/index.json'
// const apiKey = 'b5su52iphyCXS22mUWIxSTGt0U6juE2Y'
// export const getWeatherListSearch = (searchInput) => (dispatch) => {
//   const request = {
//     apikey: apiKey,
//     q: searchInput
//   }
//   try {
//     const res = MainConfig.data.autocompleteSearch
//     dispatch({
//       type: WEATHER_SEARCH_SUCCESS,
//       payload: res,
//       searchValue: searchInput
//     })
//   } catch (error) {
//     dispatch({
//       type: WEATHER_SEARCH_ERROR,
//       payload: error
//     })
//   }
// }
// export const getWeatherFiveDays = (cityKey) => (dispatch) => {
//   if (!cityKey || cityKey === 0) cityKey = 215854
//   const request = {
//     apikey: apiKey,
//     cityKey
//   }
//   try {
//     const resData = MainConfig.data.forecastsFiveDays
//     // const resData = res
//     var days = [
//       'Sunday',
//       'Monday',
//       'Tuesday',
//       'Wednesday',
//       'Thursday',
//       'Friday',
//       'Saturday'
//     ]
//     //DailyForecasts
//     const formatedWeatherArray = []
//     resData.DailyForecasts.forEach((v) => {
//       let a = new Date(v.EpochDate * 1000)
//       let obj = {}
//       obj.dayOfWeek = days[a.getDay()]
//       obj.temperature = v.Temperature
//       formatedWeatherArray.push(obj)
//     })
//     dispatch({
//       type: WEATHER_FIVE_DAYS_SUCCESS,
//       payload: formatedWeatherArray,
//       cuurWeatherKey: request.cityKey
//     })
//   } catch (error) {
//     dispatch({
//       type: WEATHER_FIVE_DAYS_ERROR,
//       payload: error
//     })
//   }
// }
// export const getCurrentWeather =
//   ({ cityKey, localizedName }) =>
//   (dispatch) => {
//     if (!cityKey || cityKey === 0) cityKey = 215854
//     const request = {
//       apikey: apiKey,
//       cityKey
//     }
//     try {
//       const resData = MainConfig.data.currentConditions
//       let currWether = {
//         cityKey,
//         localizedName,
//         weatherText: resData[0].WeatherText,
//         temperature: resData[0].Temperature
//       }
//       dispatch({
//         type: WEATHER_CURRENT_SUCCESS,
//         payload: currWether,
//         cuurWeatherKey: request.cityKey
//       })
//     } catch (error) {
//       dispatch({
//         type: WEATHER_CURRENT_ERROR,
//         payload: error
//       })
//     }
//   }
// export const getWeatherItemFormat = () => async (dispatch) => {}
