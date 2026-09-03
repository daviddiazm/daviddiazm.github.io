import React from 'react'
import './Header.css'
import Nav from '../Nav/Nav'
import Button from '../Button/Button'
import { downloadCV } from "../../utils/utils";

const Header = () => {


  return (
    <header id='home' >
      <Nav />
      <div className='header__home'>
        <article className="header__1">
          <h2><span>Hola!</span> Soy Desarrollador de software.</h2>
          <h3>David Diaz Montenegro</h3>
          <p>
            Futuro Ingeniero Informático enfocado en proyectarse como Desarrollador Full Stack. Me preparo para desempeñarme en el campo de la creación y arquitectura de aplicaciones web integrales. En mi futuro ejercicio profesional, asumiré el desarrollo de soluciones de software desde cero, gestionando tanto la experiencia visual del usuario (frontend) como la lógica de servidores y bases de datos (backend). Mi trabajo abarcará desde la implementación de interfaces interactivas apoyadas en herramientas como React o Angular y diseño UX, hasta la construcción de servicios robustos en Java con Spring Boot o Python.  En su ruta de crecimiento, David está fortaleciendo actualmente su competencia en el idioma inglés y proyecta complementar su carrera universitaria con certificaciones profesionales en desarrollo Full Stack, servicios en la nube (AWS) y UX.  El valor distintivo que aportaré a las organizaciones radica en su visión práctica del software: busca conectar la tecnología con la optimización de procesos de producción reales, combinando el rigor técnico con habilidades blandas fundamentales como la comunicación asertiva y la receptividad para el trabajo en equipo.  Lo que hace altamente interesante su perfil es esa combinación entre sensibilidad por el diseño de usuario, solidez backend y la motivación clara de aplicar la informática para transformar ideas en productos digitales tangibles. Representé el inicio del camino de un ingeniero que construirá soluciones tecnológicas con impacto real en la industria.
          </p>
          
          
          <Button text={"Descargar CV"} onClick={downloadCV} />
          
        </article>
        <section className="header__2">
          <img src="/imgs/AREmoji_20230204_193331_24458.gif" alt="" />
        </section>
      </div>
    </header>
  )
}

export default Header