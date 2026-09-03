import React from 'react'
import './Card.css'

const Card = ({icon,textOfTec, percentaje}) => {
  return (
    <div className="card">
      <i className={`${icon} card__icon`}></i>
      <h3>{textOfTec}</h3>
      <div className='back_percentaje' style={{height: percentaje}} ></div>
    </div>
  )
}

export default Card