import React, { useEffect, useState } from 'react'
import './CertificationCard.css'

const CertificationCard = ({ certification, moveNext, movePrev }) => {
  const { certificationName, certificationDescription, certificationImg } = certification

  const [startX, setStartX] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const handleTouchStart = (e) => {
    setStartX(e.touches[0].clientX);
    console.log(e.touches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    const endX = e.changedTouches[0].clientX;
    const diff = startX - endX;

    console.log({ endX, diff });


    if (diff > 50) {
      moveNext();
    } else if (diff < -50) {
      movePrev();
    }
  };

  useEffect(() => {
    // Temporizador para ocultar la imagen después de un tiempo
    const timer = setTimeout(() => {
      setIsVisible(!isVisible);
    }, 3000); // La imagen desaparecerá después de 3 segundos

    // Limpiar el temporizador si el componente se desmonta
    return () => clearTimeout(timer);
  }, [isVisible]);

  return (
    <div
      className='card-certification'
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}>

      {isVisible && (
        <img src={'/imgs/png_img/mano.png'} alt="dedo hacia la izquierda" className="animated-image" />
      )}

      <div className='landing__1'>
        {/* <img src="/imgs/png_img/Frame 3532.png" alt="" className="back__landing"/> */}
        <img src="/imgs/png_img/Frame 3530.png" alt="" className="back__landing" />
        <img src={`${certificationImg}`} alt="" className='img_landin' />
      </div>

      <article className='certification_text'>
        <h3> {certificationName} </h3>
        <p> {certificationDescription} </p>
      </article>
    </div>
  )
}

export default CertificationCard