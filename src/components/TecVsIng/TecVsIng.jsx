import React from 'react'
import './TecVsIng.css'

const TecVsIng = ({audio}) => {
  return (
    <section className='TecVsIng'>
        <h3>Diferencias entre un tecnico y un ingeniero:</h3>
        <audio controls src={audio}>
          Tu navegador no soporta la reproducción de audio.
        </audio>
      </section>
  )
}

export default TecVsIng