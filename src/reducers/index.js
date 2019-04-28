import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import auth from "./auth";
// import plants from "./plants";

import {
  UPDATE_PLANTS_VIEW,
  UPDATE_SINGLE_PLANT_VIEW,
  FETCH_PLANTS
} from "../actions";

const plants = (state = [], action) => {
  switch (action.type) {
    case UPDATE_PLANTS_VIEW:
      return action.payload;
    default:
      return state;
  }
};
const singlePlant = (state = null, action) => {
  switch (action.type) {
    case UPDATE_SINGLE_PLANT_VIEW:
      return action.payload;
    default:
      return state;
  }
};

export default combineReducers({
  auth,
  plants,
  singlePlant,
  form: formReducer,
  comments: () => "1st",
  users: () => "Joe"
});
