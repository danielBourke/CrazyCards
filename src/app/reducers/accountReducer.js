/* eslint-disable no-param-reassign */

import { GET_CARDS, RETURN_ELIGIBILITY } from "app/actions/card";

const initialState = {

};

const accountReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CARDS: {
      return {
        ...state,
        cards: action.payload,
      };
    }
    case RETURN_ELIGIBILITY: {
      return {
        ...state,
        eligiblecards: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default accountReducer;
