
/*
 * Author: Nirodha Perera
 * Date: 16/09/2019
 *
 * Post list action creaters for retrieving data.
 */

import axios from 'axios';
import * as types from '../constants/actionTypes';


export const getPostData = () => {
  return (dispatch, getState) =>
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(res => {
        return res.data
      })
};

export const getUserData = () => {
  return (dispatch, getState) =>
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(res => {
        return res.data
      })
};

export const getPostList = () => {
  return (dispatch, getState) => {
    Promise.all([
      dispatch(getUserData()),
      dispatch(getPostData())
    ]).then(res => {
      dispatch(setPostList(res))
    })
      .catch(err => {
        dispatch(setLoading(false));
      });
  }
}

export const getPostImages = () => {
  return async (dispatch, getState) => {
    axios.get('https://jsonplaceholder.typicode.com/photos?album=1')
      .then(res => {
        dispatch(setPostImages(res.data));
      })
      .catch(err => {
        dispatch(setLoading(false));
      });
  };
};

const setPostImages = images => ({
  type: types.SET_POST_IMAGES,
  images
});

const setPostList = data => ({
  type: types.SET_POSTS_INFO,
  users: data[0],
  posts: data[1]
});

export const setLoading = isLoading => ({
  type: types.SET_LOADING_POSTS,
  isLoading
});
