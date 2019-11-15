import { GET_ROADMAPS } from '../actions/types';

const initialState = {
  roadmap: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ROADMAPS:
      return {
        ...state,
        roadmap: action.payload
      };
    default:
      return state;
  }
}
