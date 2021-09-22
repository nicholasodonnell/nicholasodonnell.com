import React from 'react'
import { render } from '@testing-library/react'

import App from '../src/app'

jest.mock('react-tsparticles', () => () => <canvas />)

describe('<App />', () => {
  it('renders', () => {
    const app = render(
      <App />
    )

    expect(app.baseElement).toMatchSnapshot()
  })
})
