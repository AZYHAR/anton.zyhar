import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import { Home } from './Home.jsx'

describe('Home component', () => {
  it('renders the sections', () => {
    const { container } = render(<Home />)

    const heroElement = container.querySelector('#hero')
    expect(heroElement).toBeInTheDocument()

    const companiesElement = container.querySelector('#companies-worked-with')
    expect(companiesElement).toBeInTheDocument()

    const aboutMeElement = container.querySelector('#about-me')
    expect(aboutMeElement).toBeInTheDocument()

    const workExperienceElement = container.querySelector('#work-experience')
    expect(workExperienceElement).toBeInTheDocument()

    const projectsElement = container.querySelector('#projects')
    expect(projectsElement).toBeInTheDocument()

    const referencesElement = container.querySelector('#references')
    expect(referencesElement).toBeInTheDocument()

    const contactMeElement = container.querySelector('#contact-me')
    expect(contactMeElement).toBeInTheDocument()
  })
})
