import { TYPES } from 'actions'

export default (state, { type, payload }) => {
  switch (type) {
    case TYPES.SET_LAYOUT:
      return {
        ...state,
        layout: payload
      }
    default:
      return state
  }
}
