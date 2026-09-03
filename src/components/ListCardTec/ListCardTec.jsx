import React from 'react'
import Card from '../Card/Card'

const ListCardTec = ({ listOfTecnologies }) => {
  return (
    <section className="cards" id='cards'>
      <div className="cards__container">
        {listOfTecnologies.map((e) => {
          return <Card icon={e.icon} textOfTec={e.text} percentaje={e.percentaje} key={e.icon} />
        })}
      </div>
    </section>
  )
}

export default ListCardTec