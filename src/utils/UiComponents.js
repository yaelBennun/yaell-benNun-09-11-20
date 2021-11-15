import React from 'react'
import {
  Tabs,
  Button,
  TextField,
  CardContent,
  CardActionArea
} from '@material-ui/core'
import Autocomplete from '@material-ui/lab/Autocomplete'
import { makeStyles, withStyles } from '@material-ui/core/styles'

export const SearchValueTextField = withStyles((theme) => ({
  root: {
    '& .MuiOutlinedInput-root': {
      backgroundColor: '#c1c0b9',
      height: '3rem',
      '& fieldset': {},
      '&:hover fieldset': {}
    }
  }
}))(TextField)
export const StyledAutoCompleteSearchValue = withStyles((theme) => ({
  root: {
    width: '30rem',
    marginBottom: '5rem',
    '& .MuiFormControl-root ': {
      '&:hover': {
        backgroundColor: '#c1c0b9'
      }
    }
  },
  inputRoot: {
    '&.MuiOutlinedInput-root ': {
      borderRadius: 0
    },
    '&.MuiIconButton-root': {
      color: '#212529'
    },
    color: '#B6B6B6',
    fontWeight: 300,
    fontSize: 17,
    backgroundColor: '#c1c0b9',
    '&[class*="MuiOutlinedInput-root"] .MuiAutocomplete-input:first-child': {
      padding: '0.1rem 0 0.1rem 0.5rem'
    },
    '&.MuiAutocomplete-inputRoot[class*="MuiOutlinedInput-root"].MuiAutocomplete-endAdornment':
      {
        height: 16,
        display: 'flex',
        alignItems: 'center',
        // top: 'calc(50% - 9px) !important',
        '& .MuiAutocomplete-clearIndicator ': {
          //   padding: 15
        }
      },
    '&.MuiAutocomplete-inputRoot[class*="MuiOutlinedInput-root"]': {
      padding: '0.1rem 0 0.1rem 0.5rem',
      height: '3rem'
    },
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: '#b7b7b7'
    },
    '&:hover .MuiOutlinedInput-notchedOutline': {
      borderColor: '#b7b7b7'
    },
    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: '#b7b7b7'
    }
  },
  paper: {
    '&.MuiAutocomplete-paper': {
      backgroundColor: '#e7e6e1',
      margin: 0,
      borderRadius: 0,
      padding: 0
      // width: '80%'
    }
  },
  popupIndicator: {
    '&.MuiAutocomplete-popupIndicator': {
      color: '#393e46',
      '& .MuiSvgIcon-root': {
        width: '0.8em'
      }
    }
  },
  option: {
    '&.MuiAutocomplete-option': {
      color: '#B6B6B6',
      fontSize: 18
    }
  },
  clearIndicator: {
    '& .MuiAutocomplete-clearIndicator': {
      color: '#B6B6B6',
      '&.MuiSvgIcon-fontSizeSmall': {
        width: '0.5em'
      }
    }
  }
}))(Autocomplete)

export const StyledTabs = withStyles({
  root: {
    borderBottom: 'none',
    color: '#fff',
    minHeight: 25
  },
  indicator: {
    backgroundColor: '#1A1A1A'
  }
})(Tabs)

export const SelectButton = withStyles((theme) => ({
  root: {
    '&:hover': {
      backgroundColor: 'transparent',
      boxShadow: 'none'
    }
  }
}))(Button)
export const StyleContentCard = withStyles((theme) => ({
  root: {
    padding: '.7rem',
    maxWidth: '18rem',
    width: '18rem',
    '&:last-child': {
      padding: '.7rem'
    }
  }
}))(CardContent)
export const StyleActionsCard = withStyles((theme) => ({
  root: {
    backgroundColor: '#f8fcfb'
  }
}))(CardActionArea)
export const useStyles = makeStyles((theme) => ({
  root: {},
  typography: {
    font: 'normal normal 400 28px/33px Comic Sans MS'
  },
  cardDailyItem: {
    maxWidth: '20rem',
    width: '20rem'
  },
  cardDailyTypography: {
    font: 'normal normal 300 18px/20px Comic Sans MS',
    marginBottom: '.4rem'
  },
  cardDailyTypographyDeg: {
    font: 'normal normal 200 14px/26px Comic Sans MS',
    marginLeft: 'auto'
  },
  cardTypographyCondiTion: {
    font: 'normal normal 200 14px/26px Comic Sans MS'
  },
  typographyAddRemoveFav: {
    font: 'normal normal 300 18px/20px Comic Sans MS'
  },
  favoriteIcon: {
    color: '#8ea5eb',
    fontSize: '5rem'
  },
  typographys: {
    font: 'normal normal 400 28px/33px Comic Sans MS',
    backgroundColor: 'green'
  },
  warning: {
    color: '#FBC02D'
  },
  weatherMainItem: {
    backgroundColor: '#f8fcfb',
    borderRadius: 4,
    padding: '5rem'
  },
  currentWeatherItem: {
    marginBottom: '5rem'
  }
}))
