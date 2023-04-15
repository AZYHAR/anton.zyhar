import React from 'react'

import './Header.module.css'

import ResumePDF from '../../assets/Anton-Zyhar-Resume.pdf'

export function Header() {
  return (
    <header>
      <nav>
        <a href="/">
          <img src="logo.png" alt="Site logo" />
        </a>
        <ul id="navigation-menu">
          <li>
            <a href="#about-me">Section 1</a>
          </li>
          <li>
            <a href="#work-experience">Section 2</a>
          </li>
          <li>
            <a href="#projects">Section 3</a>
          </li>
          <li>
            <a href="#references">Section 4</a>
          </li>
        </ul>
        <a href={ResumePDF} alt="Anton Zyhar Resume">
          Resume
        </a>
      </nav>
    </header>
  )
}
