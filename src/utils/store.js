import { createStore, compose, applyMiddleware } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension/logOnlyInProduction';
import thunk from 'redux-thunk';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import reducer from '../reducers';
import * as actions from '../actions/creators';
import routerHistory from '../utils/routerHistory';

const store = createStore(
  connectRouter(routerHistory)(reducer),
  compose(
    applyMiddleware(thunk, routerMiddleware(routerHistory)),
    devToolsEnhancer({
      name: 'Custom Phone Case Editor',
      actionCreators: actions,
    }),
  ),
);

export default store;
