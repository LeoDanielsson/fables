;import { combineReducers } from 'redux'
import fables from './fables';
import languages from './languages';
import modal from './modal';

const rootReducer = combineReducers({ fables, languages, modal });

export default rootReducer;
