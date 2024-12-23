import React, { useState } from 'react'
import "./Nav.css"

const Nav = () => {

  const [toggleClass, setToggleClass] = useState("")

  const changeToggle = () => {
    if(toggleClass) {
      setToggleClass("")
    } else {
      setToggleClass("nav__slide")
    }
  }

  return (
    // <nav className="nav__slide">
    <nav className="nav">
      <button className="nav__toggel" onClick={changeToggle} >
        <i className="fa-solid fa-bars"></i>
      </button>
      <ul className={"nav__menu "+ toggleClass}>
        <li className="menu__item">
          <a href="#home" className="menu__link">Inicio</a>
        </li>
        <li className="menu__item">
          <a href="#landing" className="menu__link">Certificados</a>
        </li>
        <li className="menu__item">
          <a href="#projects" className="menu__link">Proyectos</a>
        </li>
        <li className="menu__item">
          <a href="#contact" className="menu__link">Contactame</a>
        </li>
      </ul>
    </nav>
  )
}

export default Nav