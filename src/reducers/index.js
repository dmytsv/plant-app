import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import auth from "./auth";
// import plants from "./plants";

import { UPDATE_PLANTS_VIEW, FETCH_PLANTS } from "../actions";

const plants = (state = [], action) => {
  switch (action.type) {
    case UPDATE_PLANTS_VIEW:
      return action.payload;
    default:
      return state;
  }
};

export default combineReducers({
  auth,
  plants,
  form: formReducer,
  comments: () => "1st",
  users: () => "Joe"
});
