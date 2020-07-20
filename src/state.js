import React, { createContext, useContext, useReducer } from 'react'
import reducer from 'reducer'

const initialState = {
  layout: {
    height: window.innerHeight,
    width: window.innerWidth
  }
}

export const StateContext = createContext()

export const StateProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <StateContext.Provider
      value={{
        ...state,
        dispatch
      }}>
      {children}
    </StateContext.Provider>
  )
}

export const withState = () => useContext(StateContext)
