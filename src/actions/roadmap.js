import axios from 'axios';
import { GET_ROADMAPS, GET_DETAILS, POST_ROADMAP } from './types';

const API_URL = 'https://warm-peak-98470.herokuapp.com/api/v1/roadmaps/';

// GET ROADMAPS ロードマップ一覧を取得
export const getRoadmaps = () => (dispatch, getState) => {
  axios
    .get(API_URL)
    .then(res => {
      dispatch({
        type: GET_ROADMAPS,
        payload: res.data
      });
    })
    .catch(err => console.log('err', err));
};

// GET DETAILS 特定のロードマップを取得
export const getDetails = id => (dispatch, getState) => {
  axios
    .get(`${API_URL + id}`)
    .then(res => {
      dispatch({
        type: GET_DETAILS,
        payload: res.data
      });
    })
    .catch(err => console.log('err', err));
};

// POST ROADMAP ロードマップを投稿する
export const postRoadmap = roadmap => (dispatch, getState) => {
  axios
    .post(API_URL, roadmap)
    .then(res => {
      dispatch({
        type: POST_ROADMAP,
        payload: res.data
      });
    })
    .catch(err => console.log('err', err));
};
