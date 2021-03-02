const initialStateTransaction = {
  invoice: '',
};

export const invoiceReducer = (state = initialStateTransaction, action) => {
  if (action.type === 'SET_INVOICE') {
    return {
      ...state,
      invoice: action.value,
    };
  }

  return state;
};
