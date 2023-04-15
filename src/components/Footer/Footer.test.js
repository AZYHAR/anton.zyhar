import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import React from 'react' // Add this line

import { Footer } from './Footer.jsx'

test('renders a footer element', () => {
  const { container } = render(<Footer />)
  const footer = container.querySelector('footer')
  expect(footer).toBeInTheDocument()
})
