import { compose, applyMiddleware, createStore } from 'redux';
import reducer from '../redux/reducer';
import thunk from 'redux-thunk';

// Middleware
const middleware = [thunk];

// Tools: react-native-debugger
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// store
const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(...middleware))
);

export default store;
