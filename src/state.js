import React, { createContext, useContext, useReducer } from 'react'
import reducer from 'reducer'

const initialState = {

}

const augmentDispatch = (dispatch, getState) => async (action) => {
  if (action instanceof Function) {
    await action(augmentDispatch(dispatch, getState), getState)
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
