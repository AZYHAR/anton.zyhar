import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import React from 'react'

import { Header } from './Header.jsx'

test('renders a header element with a navigation menu', () => {
  const { container } = render(<Header />)
  const header = container.querySelector('header')
  const nav = container.querySelector('nav')
  const logo = container.querySelector('img[alt="Site logo"]')
  const resumeLink = container.querySelector('a[alt="Anton Zyhar Resume"]')

  expect(header).toBeInTheDocument()
  expect(nav).toBeInTheDocument()
  expect(logo).toBeInTheDocument()
  expect(resumeLink).toBeInTheDocument()
})
