import React from 'react';
import './Card.scss';

const Card = ({ title, imageUrl, size }) => {
  return (
    <div className={size !== undefined ? `${size} card` : 'card'}>

      <div className="background-img" style={{
        backgroundImage: `url(${imageUrl})`}} />

      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  )
}

export default Card;