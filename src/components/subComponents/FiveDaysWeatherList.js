import React, { useEffect, useState } from 'react'
import { useStyles } from '../../utils/UiComponents'
import { Card, CardContent, Typography, Grid } from '@material-ui/core'

// display five days selected weather
// get props from parent component SearchWeather
export const FiveDaysWeatherList = (props) => {
  const { weatherFiveDays } = props
  const classes = useStyles()
  //
  //
  return (
    <Grid container direction='row' spacing={1}>
      {weatherFiveDays &&
        weatherFiveDays.map((u, index) => (
          <Grid item xs key={index}>
            <Card>
              <CardContent>
                <Typography className={classes.cardDailyTypography}>
                  {u.dayOfWeek}
                </Typography>
                <Typography className={classes.cardDailyTypographyDeg}>
                  {u.temperature.Minimum.Value}-{u.temperature.Maximum.Value}{' '}
                  &deg; {u.temperature.Maximum.Unit}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
    </Grid>
  )
}
