import React from 'react';
import './Card.scss';

const Card = ({ title, imageUrl, size }) => {
  return (
    <div style={{
        backgroundImage: `url(${imageUrl})`
      }}
      className={size !== undefined ? `${size} card` : 'card'}>

      <div className="content">
        <h1 className="title">{title}</h1>
        <span className="subtitle">SHOW NOW</span>
      </div>
    </div>
  )
}

export default Card;