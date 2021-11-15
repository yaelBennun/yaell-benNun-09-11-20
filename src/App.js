import HomeWeather from './pages/HomeWeather'

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
      ].join(',')
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
