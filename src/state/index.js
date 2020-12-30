import { always, compose } from 'ramda'
import React, { createContext, useContext, useReducer } from 'react'

import reducer from './reducer'
import initialState from './initialState'

export const StateContext = createContext()

export const StateProvider = ({ children }) => {
  const [ state, dispatch ] = useReducer(reducer, initialState)

  return (
    <StateContext.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {children}
    </StateContext.Provider>
  )
}

export const withState = compose(useContext, always(StateContext))
