import React from 'react'
import useFetch from '../hooks/useFetch'

const CardResident = ({url}) => {

  const resident = useFetch(url)
    
  console.log(resident)

  return (
    <article className='card'>
      <header>
        <img src={resident?.image} alt={`image of ${resident?.name}`} />
        <div className='card__status'>{resident?.status}</div>        
      </header>
      <div>
        <h3>{resident?.name}</h3>
        <div className='card__data'>
          <span>Species: {resident?.species}</span>
          <span>Origin: {resident?.origin.name}</span>
          <span>Episodes where appear: {resident?.episode.length}</span>
        </div>
      </div>       
    </article>
  )
}

export default CardResident