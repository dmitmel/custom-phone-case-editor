import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import green from '@material-ui/core/colors/green';
import blue from '@material-ui/core/colors/blue';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: green[400],
      main: green[600],
      dark: green[800],
    },
    secondary: blue,
  },
});

export default theme;
