import React from 'react'
import { StateProvider } from './state'
import Layout from './layout'

export default () => (
  <StateProvider>
    <Layout />
  </StateProvider>
)
