
import {
    FETCH_DATA_REQUEST,
    FETCH_DATA_SUCCESS,
    FETCH_DATA_FAILURE,
    FETCH_USER_DATA_REQUEST,
    FETCH_USER_DATA_SUCCESS,
    FETCH_USER_DATA_FAILURE
  } from '../types';

export const getdata = () => async (dispatch) => {
  dispatch({ type: FETCH_DATA_REQUEST });
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
      console.log(data)
    dispatch({
      type: FETCH_DATA_SUCCESS,
      payload: data
    });
  } catch (err) {
    dispatch({
      type: FETCH_DATA_FAILURE,
      payload: err.toString()
    });
  }
};

export const getUsers = () => async (dispatch) => {
  dispatch({ type: FETCH_USER_DATA_REQUEST });
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
      console.log(data)
    dispatch({
      type: FETCH_USER_DATA_SUCCESS,
      payload: data
    });
  } catch (err) {
    dispatch({
      type: FETCH_USER_DATA_FAILURE,
      payload: err.toString()
    });
  }
};