import axios from 'axios';
import store from '../store';
import {
  GET_PROFILE,
  PROFILE_LOADING,
  CLEAR_PROFILE,
  GET_ERRORS,
  SET_PROFILE,
  GET_THIS_PROFILE
} from './types';
import { PROXY } from '../utils/setAxios';

// Get current profile
export const updateProfile = (profile) => dispatch => {
  // dispatch(setProfileLoading());
  axios.post(`/api/profile/`, profile)
    .then(res => {
      return dispatch({
        type: SET_PROFILE,
        payload: res.data
      })
    })
    .catch(err => dispatch(errorSetup(err)))
};
export const followUser = (userID) => dispatch => {
  axios.put(`/api/profile/follow/${userID}`)
    .then(res => {
      return dispatch({
        type: SET_PROFILE,
        payload: res.data
      })
    })
    .catch(err => dispatch(errorSetup(err)))
};

// Get current profile
export const getProfile = (username = '', local = false) => dispatch => {
  // dispatch(setProfileLoading());
  if (local)
    return dispatch({ type: GET_THIS_PROFILE })

  axios.get(`/api/profile/` + username)
    .then(res =>
      dispatch({
        type: GET_PROFILE,
        payload: res.data
      })
    )
    .catch(err => dispatch(errorSetup(err)));
};

// Profile loading
export const setProfileLoading = () => {
  return {
    type: PROFILE_LOADING
  };
};

// Clear profile
export const clearProfile = () => {
  store.dispatch({
    type: CLEAR_PROFILE,
    payload: {}
  })
};

// eslint-disable-next-line
const errorSetup = (error) => ({
  type: GET_ERRORS,
  payload: error
})