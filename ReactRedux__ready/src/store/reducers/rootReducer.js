import { CHANGE_FIRST_NAME, CHANGE_SECOND_NAME } from "../actions/actions";

const initialState = {
  firstName: "",
  secondName: "",
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_FIRST_NAME:
      return { ...state, firstName: action.firstName };

    case CHANGE_SECOND_NAME:
      return { ...state, secondName: action.secondName };

    default:
      return state;
  }
};
