import axios from 'axios';
import { FETCH_SURVEYS, FETCH_USER } from './types';

export const fetchUser = () => { return async (dispatch) => {        
    const res = await axios.get('/api/current_user');
    dispatch({ type: FETCH_USER, payload: res.data });
    }
    };

export const handleToken = (token) => {
    return async dispatch => {
        const res = await axios.post('/api/stripe', token);
        dispatch({ type: FETCH_USER, payload: res.data });
    }
}
    
export const submitSurvey = async (values) => {
     
       const res = await axios.post('/api/surveys', values);
      
   }

export const fetchSurveys = () => async dispatch => {
    const res = await axios.get('api/surveys');
    dispatch({ type: FETCH_SURVEYS, payload: res.data });
   }


