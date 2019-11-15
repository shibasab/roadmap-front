import axios from 'axios';
import { returnErrors } from './messages';
import { GET_ROADMAPS } from './types';

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
