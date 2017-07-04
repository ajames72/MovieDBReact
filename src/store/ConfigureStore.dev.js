import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from '../reducers';
//Redux middleware that spits an error on you when you try to mutate your state either inside a dispatch or between dispatches.
//For development use only!
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';

export default function configureStore(initialState) {
  /*
    https://github.com/zalmoxisus/redux-devtools-extension#usage
  */
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  return createStore(
    rootReducer,
    initialState,
    composeEnhancers(
      applyMiddleware(thunk, reduxImmutableStateInvariant())
    )
  );
}
