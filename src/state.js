import React, { createContext, useContext, useReducer } from 'react'
import reducer from 'reducer'

const initialState = {
  canvas: {
    height: 0,
    width: 0
  },
  game: {
    initialized: false,
    playing: false
  },
  layout: {
    height: window.innerHeight,
    width: window.innerWidth
  },
  ship: {
    height: 0,
    width: 0,
    x: 0,
    y: 0
  }
}

// dispatch with thunk support
const augmentDispatch = (dispatch, getState) => async action => {
  if (action instanceof Function) {
    await action(dispatch, getState)
  } else {
    await dispatch(action)
  }
}

export const StateContext = createContext()

export const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const getState = () => state

  return (
    <StateContext.Provider
      value={{
        ...state,
        dispatch: augmentDispatch(dispatch, getState)
      }}
    >
      {children}
    </StateContext.Provider>
  )
}

export const withState = () => useContext(StateContext)
