import { GET_ROADMAPS, GET_DETAILS, POST_ROADMAP } from '../actions/types';

const initialState = {
  roadmaps: [],
  detail: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ROADMAPS:
      return {
        ...state,
        roadmaps: action.payload
      };
    case GET_DETAILS:
      return {
        ...state,
        detail: action.payload
      };
    case POST_ROADMAP:
      return {
        ...state,
        roadmap: action.payload
      };
    default:
      return state;
  }
}
