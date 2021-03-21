import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';

import './style.css';
import App from './App';
import reducers from './reducers';
import { ReduxState } from './types/Redux';

const composer = composeWithDevTools({});
const store: Store<ReduxState> = createStore(reducers, {}, composer());

const theme = createMuiTheme({
    palette: {
        primary: {
            main: deepPurple[400],
        }
    },
    typography: {
        button: {
            margin: '15px 5px'
        }
    }
});

ReactDOM.render(
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <App />
        </ThemeProvider>
    </Provider>,
  
    document.getElementById('root')
);
