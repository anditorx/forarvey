const initialUser = {
  user: [],
};

export const userReducer = (state = initialUser, action) => {
  if (action.type === 'SET_USER') {
    return {
      ...state,
      user: action.value,
    };
  }

  return state;
};

const initialToken = {
  token: '',
};

export const tokenReducer = (state = initialToken, action) => {
  if (action.type === 'SET_TOKEN') {
    return {
      ...state,
      token: action.value,
    };
  }

  return state;
};
