import React from 'react'
import { render } from '@testing-library/react'

import App from '../src/app'
import { StateProvider } from '../src/state'

describe('<App />', () => {
  it('renders', () => {
    const app = render(
      <StateProvider>
        <App />
      </StateProvider>
    )

    expect(app.baseElement).toMatchSnapshot()
  })
})
