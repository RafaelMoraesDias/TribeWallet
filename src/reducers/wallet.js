import { ADD_EXPENSES, FAILED_API, RECEIVE_API } from '../actions/api';

const initialState = {
  currencies: [],
  expenses: [],
};

const wallet = (state = initialState, action) => {
  switch (action.type) {
  case RECEIVE_API: {
    const currencyArray = Object.keys(action.value);
    return { ...state,
      currencies: currencyArray.filter((el) => el !== 'USDT'),
    };
  }
  case ADD_EXPENSES: {
    console.log('add', action.value);
    return {
      ...state,
      expenses: [...state.expenses, action.value],
      // exchangeRates: action.value,

    };
  }
  case FAILED_API: {
    return { ...state,
      error: action.error,
    };
  }
  default:
    return state;
  }
};
export default wallet;
