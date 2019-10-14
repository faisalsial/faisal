import { LOGIN_REQUESTED, LOGIN, SIGNUP_REQUESTED, SIGNUP, LOGOUT_REQUESTED, LOGOUT } from "../actions";

import { login as login_api } from "../../api/authentication";
import { signup as signup_api } from "../../api/authentication";
import { logout as logout_api } from "../../api/authentication";

export const login = (usernameOrEmail, password) => {
  return dispatch => {
    dispatch({
      type: LOGIN_REQUESTED
    });

    login_api(usernameOrEmail, password).then(response => {
      dispatch({
        type: LOGIN,
        token: response.token,
        message: response.message,
      });
    });
  };
};

export const signup = (
  name,
  surname,
  email,
  user_name,
  password,
  native_language
) => {
  return dispatch => {
    dispatch({
      type: SIGNUP_REQUESTED
    });

    signup_api(name, surname, email, user_name, password, native_language).then(
      response => {
        dispatch({
          type: SIGNUP,
          token: response.token,
          message: response.message,
        });
      }
    );
  };
};

export const logout = () => {
  return dispatch => {
    dispatch({
      type: LOGOUT_REQUESTED,
    });

    logout_api().then(() => {
      dispatch({
        type: LOGOUT,
        token: null,
        message: null,
      });
    });


  }
}
