import React from 'react'

const MoviesCard = ({image}) => {
  return (
    <div className='shrink-0'>
        <img src={image.medium} className='w-40' />
    </div>
  )
}

export default MoviesCard;