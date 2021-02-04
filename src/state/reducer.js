import {
  always,
  compose,
  cond,
  mergeDeepRight,
  objOf,
  prop,
  propEq,
  T,
  uncurryN,
} from 'ramda'

import { TYPES } from '../actions'

const action = propEq('type')

const setState = uncurryN(3, (type, state) => compose(
  mergeDeepRight(state),
  objOf(type),
  prop('payload'),
))

const setLayout = setState('layout')

export default uncurryN(2, state => cond([
  [ action(TYPES.SET_LAYOUT), setLayout(state) ],
  [ T, always(state) ],
]))
