import axios from 'axios';
import { GET_ROADMAPS, GET_DETAILS } from './types';

// GET ROADMAPS ロードマップ一覧を取得
export const getRoadmaps = () => (dispatch, getState) => {
  axios
    .get('http://127.0.0.1:8000/api/v1/roadmaps/')
    .then(res => {
      dispatch({
        type: GET_ROADMAPS,
        payload: res.data
      });
    })
    .catch(err => console.log('err', err));
};

//GET DETAILS 特定のロードマップを取得
export const getDetails = id => (dispatch, getState) => {
  axios
    .get(`http://127.0.0.1:8000/api/v1/roadmaps/${id}`)
    .then(res => {
      dispatch({
        type: GET_DETAILS,
        payload: res.data
      });
    })
    .catch(err => console.log('err', err));
};
