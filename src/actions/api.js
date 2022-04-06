export const RECEIVE_API = 'RECEIVE_API';
export const FAILED_API = 'FAILED_API';
export const ADD_EXPENSES = 'ADD_EXPENSES';

export function requestAPI(value) {
  return { type: 'RECEIVE_API', value };
}

export function addExpenses(value) {
  return { type: 'ADD_EXPENSES', value };
}

export function requestApiFailure(error) {
  return { type: 'FAILED_API', error };
}

export function getApi() {
  return async (dispatch) => {
    try {
      const resolve = await fetch('https://economia.awesomeapi.com.br/json/all');
      const data = await resolve.json();
      dispatch(requestAPI(data));
      // dispatch(addExpenses);
      // console.log(data);
    } catch (error) {
      dispatch(requestApiFailure(error));
    }
  };
}

export function getExchange(state) {
  return async (dispatch) => {
    try {
      const resolve = await fetch('https://economia.awesomeapi.com.br/json/all');
      const data = await resolve.json();
      dispatch(addExpenses({ ...state, exchangeRates: data }));
      // dispatch(addExpenses);
      // console.log(data);
    } catch (error) {
      dispatch(requestApiFailure(error));
    }
  };
}
