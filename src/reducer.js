import { TYPES } from 'actions'

export default (state, { type, payload }) => {
  process.env.NODE_ENV === 'development' && console.groupCollapsed(type)

  process.env.NODE_ENV === 'development' && console.log('old state', state)
  process.env.NODE_ENV === 'development' && console.log('payload', payload)

  const newState = (() => {
    switch (type) {
      case TYPES.ADD_MISSLE:
        return {
          ...state,
          missles: [
            ...state.missles,
            payload
          ]
        }
      case TYPES.SET_CANVAS:
        return {
          ...state,
          canvas: {
            ...state.canvas,
            ...payload
          }
        }
      case TYPES.SET_GAME:
        return {
          ...state,
          game: {
            ...state.game,
            ...payload
          }
        }
      case TYPES.SET_LAYOUT:
        return {
          ...state,
          layout: {
            ...state.payload,
            ...payload
          }
        }
      case TYPES.SET_MISSLES:
        return {
          ...state,
          missles: [
            ...payload
          ]
        }
      case TYPES.SET_SHIP:
        return {
          ...state,
          ship: {
            ...state.ship,
            ...payload
          }
        }
      default:
        return state
    }
  })()

  process.env.NODE_ENV === 'development' && console.log('new state', newState)
  process.env.NODE_ENV === 'development' && console.groupEnd()

  return newState
}
