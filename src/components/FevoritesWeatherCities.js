import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  getWeatherFiveDays,
  getCurrentWeather
} from '../store/actions/weatherAction'
import {
  useStyles,
  StyleContentCard,
  StyleActionsCard
} from '../utils/UiComponents'
import { Card, Typography, Grid } from '@material-ui/core'

// fevorites list of weather
// get props of click display when toggle on fevorite item
// when clicked dosplay item on home page
export const FevoritesWeatherCities = (props) => {
  const { clickHandler } = props
  const classes = useStyles()
  const dispatch = useDispatch()
  const weatherFavoritesList = useSelector(
    (state) => state.weatherFavoritesList.weatherFavoritesList
  )
  const favoritesListLength = useSelector(
    (state) => state.weatherFavoritesList.favoritesListLength
  )
  const displayFavoriteItem = (favoriteItem) => {
    clickHandler()
    let payload = {
      cityKey: favoriteItem.cityKey,
      localizedName: favoriteItem.localizedName
    }

    dispatch(getCurrentWeather(payload))
    dispatch(getWeatherFiveDays(favoriteItem.cityKey))
  }
  useEffect(() => {}, [dispatch])
  return (
    <Grid container direction='row' spacing={1}>
      {weatherFavoritesList &&
        weatherFavoritesList.map((favoriteItem, index) => (
          <Grid item key={index}>
            <Card className={classes.cardDailyItem}>
              <StyleActionsCard
                disableSpacing
                onClick={() => displayFavoriteItem(favoriteItem)}
              >
                <StyleContentCard>
                  <Typography className={classes.cardDailyTypography}>
                    {favoriteItem.localizedName}
                  </Typography>
                </StyleContentCard>
                <Typography className={classes.cardTypographyCondiTion}>
                  {favoriteItem.weatherText}
                </Typography>
                <Typography className={classes.cardDailyTypographyDeg}>
                  {favoriteItem.temperature &&
                    favoriteItem.temperature.Metric.Value}{' '}
                  &deg;{' '}
                  {favoriteItem.temperature &&
                    favoriteItem.temperature.Metric.Unit}
                </Typography>
              </StyleActionsCard>
            </Card>
          </Grid>
        ))}
    </Grid>
  )
}
