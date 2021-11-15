import HomeWeather from './pages/HomeWeather'
// import { Provider } from 'react-redux'
// import configureStore from './redux/store'
// const store = configureStore()

import store from './store/store'
import { Provider } from 'react-redux'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
function App() {
  const mainTheme = createMuiTheme({
    palette: {
      primary: {
        main: '#323232'
      },
      secondary: {
        main: '#FBFBFB'
      }
    },
    typography: {
      fontFamily: [
        `'Ubuntu', 
        sans-serif,
        'Ubuntu Mono', 
        monospace`
      ].join(','),
      // leave
      h5: {
        color: '#FFFFFF',
        fontSize: 12,
        fontWeight: 300
      },
      // leave
      h4: {
        color: '#009688',
        fontSize: 16,
        fontWeight: 500,
        borderBottom: '2px solid transparent',
        '&:hover': {
          transition: '.3s',
          borderBottom: '2px solid #009688'
        }
      },
      body2: {
        fontSize: 13,
        fontFamily: "'Ubuntu', sans-serif",
        color: '#FBFBFB'
      },
      // leave
      caption: {
        fontSize: 11,
        color: '#FBFBFB',
        fontFamily: "'Ubuntu', sans-serif",
        fontWeight: 400
      }
    }
  })
  return (
    <ThemeProvider theme={mainTheme}>
      <Provider store={store}>
        <HomeWeather />
      </Provider>
    </ThemeProvider>
  )
}

export default App
