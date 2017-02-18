;import { combineReducers } from 'redux'
import fables from './fables';
import languages from './languages';

const rootReducer = combineReducers({ fables, languages });

export default rootReducer;
