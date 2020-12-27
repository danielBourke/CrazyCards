import axios from '../utils/axios';

export const GET_CARDS = "GET_CARDS"
export const RETURN_ELIGIBILITY = "RETURN_ELIGIBILITY"
export function getCards() {
    const request = axios.get('/api/account/cards');
  
    return (dispatch) => {
      request.then((response) => dispatch({
        type: GET_CARDS,
        payload: response.data
      }));
    };
  }

  export const  eligibilityCheck =  (user) => {
    console.log(user)
    const request =  axios.post('/api/account/searchcards',{income: user.income, status: user.status});
    console.log(request.data)
    return (dispatch) => {
      request.then((response) =>  dispatch({
       type: RETURN_ELIGIBILITY,
        payload: response.data
      }));
    };
  }

