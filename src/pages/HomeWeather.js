import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import { AppBar, Tabs, Tab, Typography, Box } from '@material-ui/core'
import { StyledTabs } from '../utils/UiComponents'
import SearchWeather from '../components/SearchWeather'
import { FevoritesWeatherCities } from '../components/FevoritesWeatherCities'
function TabPanel(props) {
  const { children, value, index, ...other } = props

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`
  }
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper
  }
}))

export default function HomeWeather() {
  const classes = useStyles()
  const [value, setValue] = React.useState(0)
  const handleChange = (event, newValue) => {
    if (!newValue) newValue = 0
    setValue(newValue)
  }

  return (
    <div className={classes.root}>
      <AppBar position='static'>
        <StyledTabs
          value={value}
          onChange={handleChange}
          aria-label='simple tabs example'
        >
          <Tab label='Home' {...a11yProps(0)} />
          <Tab label='Fevorites' {...a11yProps(1)} />
        </StyledTabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <SearchWeather />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <FevoritesWeatherCities clickHandler={handleChange} />
      </TabPanel>
    </div>
  )
}
