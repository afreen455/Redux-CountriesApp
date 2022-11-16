import { combineReducers } from 'redux';
import countryReducer from './regionReducer';
export default combineReducers({
    event: countryReducer
})