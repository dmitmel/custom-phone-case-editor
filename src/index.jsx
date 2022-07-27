import React from 'react';
import ReactDOM from 'react-dom';
import { Provider as ReduxStoreProvider } from 'react-redux';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import 'normalize.css';
import './resets.css';
import App from './components/App';
import theme from './utils/theme';
import store from './utils/store';

window.addEventListener('load', () => {
  ReactDOM.render(
    <ReduxStoreProvider store={store}>
      <MuiThemeProvider theme={theme}>
        <App />
      </MuiThemeProvider>
    </ReduxStoreProvider>,
    document.getElementById('root'),
  );
});
