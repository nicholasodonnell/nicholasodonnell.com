import { TYPES } from '../actions'

export default (state, { type, payload }) => {
  switch (type) {
    case TYPES.SET_LAYOUT:
      return {
        ...state,
        layout: {
          ...state.payload,
          ...payload,
        },
      }
    default:
      return state
  }
}
