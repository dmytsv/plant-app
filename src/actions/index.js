import heroku from "../api/heroku";

export const AUTH_USER = "AUTH_USER";
export const AUTH_ERROR = "AUTH_ERROR";
export const UPDATE_PLANTS_VIEW = "UPDATE_PLANTS_VIEW";
export const FETCH_PLANTS = "FETCH_PLANTS";

export const updatePlantsVeiw = events => {
  return {
    type: UPDATE_PLANTS_VIEW,
    payload: events
  };
};

/** API */
export const fetchPlants = () => async (dispatch, getState) => {
  const token = getState().auth.authenticated;
  const { data } = await heroku.get("/api/plants", {
    headers: { authorization: token }
  });
  console.log("data ", data);
  dispatch({ type: UPDATE_PLANTS_VIEW, payload: data });
};

/** AUTH */
export const signup = (formProps, callback) => async dispatch => {
  try {
    const {
      data: { token }
    } = await heroku.post("/signup", formProps);

    dispatch({
      type: AUTH_USER,
      payload: token
    });
    localStorage.setItem("token", token);
    callback();
  } catch (err) {
    console.log(err);
    dispatch({
      type: AUTH_ERROR,
      payload: "Oops! Something went horribly wrong"
    });
  }
};
export const signout = () => {
  localStorage.removeItem("token");
  return {
    type: AUTH_USER,
    payload: ""
  };
};

export const signin = (formProps, callback) => async dispatch => {
  try {
    const {
      data: { token }
    } = await heroku.post("/signin", formProps);

    dispatch({
      type: AUTH_USER,
      payload: token
    });
    localStorage.setItem("token", token);
    callback();
  } catch (err) {
    console.log(err);
    dispatch({
      type: AUTH_ERROR,
      payload: "Oops! Something went horribly wrong"
    });
  }
};
