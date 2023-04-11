// App.test.js

import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import { App } from '../App.jsx'

describe('App component', () => {
  it('renders the "Hello" text', () => {
    const { getByText } = render(<App />)
    expect(getByText('Hello')).toBeInTheDocument()
  })
})
