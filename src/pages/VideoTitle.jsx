import React from 'react'

const VideoTitle = ({title, summary}) => {
  return (
    <div className='py-20 pl-14 w-1/2'>
        <h1 className='text-2xl font-bold mb-5'>{title}</h1>
        <div dangerouslySetInnerHTML={{__html: summary}}></div>
    </div>
  )
}

export default VideoTitle