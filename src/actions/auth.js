import authService from '../services/auth';

export const AUTH_USER_START = 'AUTH_USER_START';
export const AUTH_USER_SUCCESS = 'AUTH_USER_SUCCESS';
export const AUTH_USER_FAIL = 'AUTH_USER_FAIL';

export const LOGOUT_USER = 'LOGOUT_USER';

export const loginUser = (formData, history) => {
  return async (dispatch) => {
    dispatch({
      type: AUTH_USER_START,
    });
    try {
      const { data } = await authService.signin(formData);

      dispatch({
        type: AUTH_USER_SUCCESS,
        payload: data,
      });
      history.push('/admin/dashboard');
    } catch (error) {
      dispatch({
        type: AUTH_USER_FAIL,
        payload: error.message,
      });
    }
  };
};
export const signup = (formData, history) => {
  return async (dispatch) => {
    dispatch({
      type: AUTH_USER_START,
    });
    try {
      const { data } = await authService.signup(formData);
      dispatch({
        type: AUTH_USER_SUCCESS,
        payload: data,
      });
      history.push('/admin/dashboard');
    } catch (error) {
      dispatch({
        type: AUTH_USER_FAIL,
        payload: error.message,
      });
    }
  };
};
export const logoutUser = (history) => {
  return async (dispatch) => {
    dispatch({
      type: LOGOUT_USER,
    });
    history.push('/');
  };
};
