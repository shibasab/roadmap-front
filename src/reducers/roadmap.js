import { GET_ROADMAPS, GET_DETAILS } from '../actions/types';

const initialState = {
  roadmap: [],
  detail: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ROADMAPS:
      return {
        ...state,
        roadmap: action.payload
      };
    case GET_DETAILS:
      return {
        ...state,
        detail: action.payload
      };
    default:
      return state;
  }
}
