export const REQUEST_API = 'REQUEST_API';
export const FAILED_API = 'FAILED_API';

export function requestAPI(value) {
  return { type: 'REQUEST_API', value };
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
      console.log(data);
    } catch (error) {
      dispatch(requestApiFailure(error));
    }
  };
}
