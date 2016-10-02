import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';
import { fetchFables } from './actions/index';

const store = createStore(rootReducer, applyMiddleware(thunk));

store.dispatch(fetchFables());

export default store;
