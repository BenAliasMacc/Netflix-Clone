import React from 'react';
import './Video.scss';

export const Video = () => {

    let id = "8lZki_Z35N0";

  return (

    <div className='video'>
        <iframe src={`https://www.youtube.com/embed/${id}`} title='video' frameBorder="0" allowFullScreen></iframe>
    </div>
  )
};