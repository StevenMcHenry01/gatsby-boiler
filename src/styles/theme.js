import { createMuiTheme } from '@material-ui/core/styles'

export const theme = createMuiTheme({
  palette: {
    frequent: {
      black: '#1c181d',
      offBlack: '#333333',
      white: '#FFFFFF',
      eggshell: '#f1f1e1',
    },
    primary: {
      main: '#27AAE1',
      dark: '#2c6daf',
      light: '#76b3f0'
    },
    secondary: {
      main: '#f0544f',
      dark: '#bb4c40',
      light: '#f58b7f'
    },
    tertiary: {
      main: '#00ab5a',
      dark: '#018849',
      light: '#50d698'
    },
    error: {
      main: '#ff1744',
    },
  },
})
