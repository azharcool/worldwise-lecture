const initialUserState = {
  user: null,
  token: null,
  loading: false,
  error: null,
};

// API CALLING
export function userReducer(state = initialUserState, action) {
  if (action.type === "LOGIN") {
    return {};
  }
  switch (action.type) {
    case "USER/LOGIN":
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
      };
    case "USER/LOGOUT":
      return {
        ...state,
        token: null,
        user: null,
      };
    default:
      return state;
  }
}

export function citiesReducer(state = {}, action) {
  //
  return state;
}

/**
 *
 * 1. Update DATA - dispatch action -> reducer -> store
 * 2. Get DATA - selector -> store
 *
 * Core Feature
 * action -> what data need to store and where to store.
 * reducer -> business logic, where you manipulate which object data or array data can mutate
 * store -> gaint object - all reducers object
 *
 *
 * UI
 * dispatch -> dispatch action to reducer -> store
 * selector -> get state from store
 *
 *
 *
 *
 *
 */
