import React from 'react'
import './Header.css'
import Nav from '../Nav/Nav'
import Button from '../Button/Button'
import { downloadCV } from "../../utils/utils";

const Header = () => {


  return (
    <header>
      <Nav />
      <div className='header__home'>
        <article className="header__1">
          <h2><span>Hola!</span> Soy Desarrollador de software.</h2>
          <h3>David Diaz Montenegro</h3>
          <p>Desarrollador de software con experiencia en proyectos de desarrollo web, especializado en front-end y con habilidades
            comprobadas en tecnologías como React , Vue , y Angular . En el back-end , cuento con experiencia utilizando Node.js, PHP y Python
            junto con la biblioteca FastAPI . Poseo sólidos fundamentos en bases de datos relacionales como PostgreSQL , MySQL , y Oracle SQL .
            Además, aplico principios de UX con el objetivo de contribuir a que la web sea un espacio más accesible y equitativo para todos.</p>
          <Button text={"Descargar CV"} onClick={downloadCV} />
          {/* <a href="/pdfs/David Diaz Montengro CV.pdf" download="David Diaz Montengro CV.pdf" >aaa</a> */}
        </article>
        <section className="header__2">
          <img src="/imgs/AREmoji_20230204_193331_24458.gif" alt="" />
        </section>
      </div>
    </header>
  )
}

export default Header