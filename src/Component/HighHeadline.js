import React from 'react';

const HighHeadline = (props) => {
  return (
      <div className='w-100 High-headline'>
        <h1 className="c-Charade d-flex justify-content-end border-b1-Bright-Gray Fs-16 ">{props.text}</h1>
      </div>

  )
}

export default HighHeadline;