import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  getWeatherListSearch,
  getWeatherFiveDays,
  getCurrentWeather
} from '../store/actions/weatherAction'
import {
  addItemFromFavorites,
  deleteItemFromFavorites
} from '../store/actions/favoritesWeatherAction'
import { Grid, Typography, InputAdornment, Button } from '@material-ui/core'
import SearchIcon from '@mui/icons-material/Search'
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import { FiveDaysWeatherList } from './subComponents/FiveDaysWeatherList'
import CurrentCityConditions from './subComponents/CurrentCityConditions'
import {
  SearchValueTextField,
  StyledAutoCompleteSearchValue,
  useStyles,
  SelectButton
} from '../utils/UiComponents'

const SearchWeather = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const weatherList = useSelector((state) => state.weatherSearchList)
  const searchValue = useSelector(
    (state) => state.weatherSearchList.searchValue
  )
  const weatherFavoritesList = useSelector(
    (state) => state.weatherFavoritesList.weatherFavoritesList
  )
  const cuurWeatherKeyStateInd = useSelector(
    (state) => state.weatherFavoritesList.cuurWeatherKey
  )
  const {
    loading,
    error,
    weatherSearchList,
    weatherFiveDays,
    currentWeatherItem,
    cuurWeatherKey
  } = weatherList

  const [inputSearchValue, setInputSearchValue] = useState('tel aviv')
  useEffect(() => {
    if (Object.keys(currentWeatherItem).length === 0) {
      let payload = {
        cityKey: '215854',
        localizedName: 'tel aviv'
      }
      console.log(currentWeatherItem)
      dispatch(getWeatherFiveDays(payload.cityKey))
      dispatch(getCurrentWeather(payload))
      dispatch(getWeatherListSearch('tel aviv'))
    }
  }, [dispatch])
  const handleSearchValue = (searchItem) => {
    let payload = {
      cityKey: searchItem.Key,
      localizedName: searchItem.LocalizedName
    }
    dispatch(getWeatherFiveDays(searchItem.Key))
    dispatch(getCurrentWeather(payload))
  }
  const isFavorite = () => {
    if (Object.keys(currentWeatherItem).length !== 0) {
      const find = weatherFavoritesList.find(
        (favorite) => favorite.cityKey === currentWeatherItem.cityKey
      )
      if (cuurWeatherKeyStateInd && find) {
        return true
      } else return false
    }
    return false
  }
  const toggleFavoriteWeather = () => {
    if (
      cuurWeatherKeyStateInd &&
      weatherFavoritesList.find(
        (favorite) => favorite.cityKey === currentWeatherItem.cityKey
      )
    ) {
      let cityKey = currentWeatherItem.cityKey
      dispatch(deleteItemFromFavorites(cityKey))
    } else {
      dispatch(addItemFromFavorites(currentWeatherItem))
    }
  }
  const handleSearchValueInput = (e, searchItem) => {
    setInputSearchValue(searchItem)
    if (searchItem !== searchValue) dispatch(getWeatherListSearch(searchItem))
  }
  return (
    <Grid container>
      <Grid item xs></Grid>
      <Grid item xs={9}>
        <Grid container direction='column' justify='center'>
          {/* search */}
          <Grid item align='center'>
            <StyledAutoCompleteSearchValue
              disableClearable
              id='combo-box-demo'
              forcePopupIcon={false}
              options={weatherSearchList}
              getOptionLabel={(option) => option.LocalizedName}
              onChange={(event, newValue) => handleSearchValue(newValue)}
              onInputChange={handleSearchValueInput}
              renderInput={(params) => {
                return (
                  <SearchValueTextField
                    {...params}
                    variant='outlined'
                    InputProps={{
                      ...params.InputProps,
                      style: {
                        color: '#393e46',
                        font: ' normal normal 300 14px/16px Ubuntu',
                        padding: '0',
                        borderRadius: '0'
                      },
                      endAdornment: (
                        <InputAdornment>
                          <SearchIcon />
                        </InputAdornment>
                      )
                    }}
                    fullWidth
                  />
                )
              }}
            />
          </Grid>
          {/* selected weather */}
          <Grid item>
            <Grid
              container
              direction='column'
              className={classes.weatherMainItem}
            >
              {/* curr and favorite toggle */}
              <Grid item>
                <Grid
                  container
                  justify='space-between'
                  className={classes.currentWeatherItem}
                >
                  {/* current weather */}
                  <Grid item>
                    <CurrentCityConditions
                      currentWeatherItem={currentWeatherItem}
                    />
                  </Grid>
                  {/* toggle favorite */}
                  <Grid item>
                    <Grid container direction='row'>
                      <Grid item>
                        <Typography className={classes.typographyAddRemoveFav}>
                          {isFavorite() ? 'Remove from ' : 'Add to '}
                          favorites
                        </Typography>
                      </Grid>
                      <Grid item>
                        <SelectButton
                          onClick={() => toggleFavoriteWeather()}
                          style={{ padding: '0' }}
                        >
                          {isFavorite() ? (
                            <FavoriteIcon className={classes.favoriteIcon} />
                          ) : (
                            <FavoriteBorderIcon
                              className={classes.favoriteIcon}
                            />
                          )}
                        </SelectButton>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              {/* five days */}
              <Grid item>
                <FiveDaysWeatherList weatherFiveDays={weatherFiveDays} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs></Grid>
    </Grid>
  )
}

export default SearchWeather
