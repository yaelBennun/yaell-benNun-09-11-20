import React from 'react'
import { Typography, Grid } from '@material-ui/core'
import { useStyles } from '../../utils/UiComponents'
import { makeStyles, withStyles } from '@material-ui/core/styles'

function CurrentCityConditions(props) {
  const classes = useStyles()
  const { currentWeatherItem } = props
  return (
    <Grid container direction='column'>
      <Grid item>
        <Typography className={classes.typography}>
          {currentWeatherItem.localizedName}
        </Typography>
      </Grid>
      <Grid item>
        <Typography className={classes.typography}>
          {currentWeatherItem.temperature &&
            currentWeatherItem.temperature.Metric.Value}{' '}
          &deg;{' '}
          {currentWeatherItem.temperature &&
            currentWeatherItem.temperature.Metric.Unit}
        </Typography>
      </Grid>
    </Grid>
  )
}

export default CurrentCityConditions
