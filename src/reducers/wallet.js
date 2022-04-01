import { FAILED_API, REQUEST_API } from '../actions/api';

const initialState = {
  currencies: [],
  expenses: [],
};

const wallet = (state = initialState, action) => {
  switch (action.type) {
  case REQUEST_API: {
    const currencyArray = Object.keys(action.value);
    return { ...state,
      currencies: currencyArray.filter((el) => el !== 'USDT'),
    }; }
  case FAILED_API:
    return { ...state,
      error: action.error,
    };
  default:
    return state;
  }
};

export default wallet;
