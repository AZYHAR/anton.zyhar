import React from 'react'

import './Header.module.css'

export function Header() {
  return (
    <header>
      <img src="logo.png" alt="Anton Zyhar logo" />
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
        <a href="Anton-Zyhar-Resume.pdf" alt="Anton Zyhar Resume">
          Resume
        </a>
      </nav>
    </header>
  )
}
