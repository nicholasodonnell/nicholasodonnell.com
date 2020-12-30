import { compose, merge, objOf } from 'ramda'

import { SET_LAYOUT } from './types'

export default compose(
  merge({ type: SET_LAYOUT }),
  objOf('payload'),
)
