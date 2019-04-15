import { ADD_COUNT } from "../actions/actionTypes";
const initialState = {
  count: 0
};

export const addReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COUNT:
      return {
        ...state,
        count: state.count + 1
      };

    default:
      return state;
  }
};
