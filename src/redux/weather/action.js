import { WEATHER_SEARCH_SUCCESS } from './constants'
import axios from 'axios'

export const getWeatherListSearch = (searchInput) => async (dispatch) => {
  const request = {
    apikey: 'b5su52iphyCXS22mUWIxSTGt0U6juE2Y',
    q: searchInput
  }
  try {
    const res = await axios.get(
      `http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${request.apikey}&q=${request.q}&language=en-us`
    )
    if (res.status === 200) {
      dispatch({
        type: WEATHER_SEARCH_SUCCESS,
        payload: {
          weatherSearchList: res.data
        }
      })
    }
  } catch (error) {
    console.error(error)
  }
}
