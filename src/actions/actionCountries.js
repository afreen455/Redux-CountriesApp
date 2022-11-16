import { FETCH_COUNTRIES ,INVALID_REQST} from './index.js';
import axios from 'axios';
export const fetchCountries = (region) => (dispatch) => {
     axios.get("https://restcountries.com/v3.1/region/"+region)
        .then(res => {
            console.log("data", res.data)
            dispatch(get(res.data));
        })
        .catch((error) =>{
            dispatch(fetchError());
            alert( "404 not found", error)
        });
}
const get = (countries) => {
    return {
        type: FETCH_COUNTRIES,
        payload: countries
    }
}
const fetchError = (error) =>{
    return {
        type: INVALID_REQST,
        payload:error
    }
}