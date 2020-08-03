import { INITIAL_STATE } from 'constants'
import React, { createContext, useContext, useReducer } from 'react'
import reducer from 'reducer'

export const StateContext = createContext()
export const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE)

  return (
    <StateContext.Provider
      value={{
        ...state,
        dispatch
      }}
    >
      {children}
    </StateContext.Provider>
  )
}

export const withState = () => useContext(StateContext)
