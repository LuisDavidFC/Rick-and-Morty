import React from 'react'

const LocationInfo = ({location}) => {
  return (
    <article className='location'>
        <h2 className='location__title'>{location?.name}</h2>
        <div className='location__data'>
            <span>Type: {location?.type}</span>
            <span>Dimension: {location?.dimension}</span>
            <span>Population: {location?.residents.length}</span>
        </div>
    </article>
  )
}

export default LocationInfo