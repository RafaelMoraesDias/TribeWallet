const initialState = {
  currencies: [],
  expenses: [],
};

const wallet = (state = initialState, action) => {
  switch (action.type) {
  // case 'ADDVALUE':
  // return { ...state,
  //   currecies: action.value,
  // };
  default:
    return state;
  }
};

export default wallet;
