import React from 'react';
import { withRouter } from 'react-router-dom';
import './Card.scss';

const Card = ({ title, imageUrl, size, history, linkUrl, match }) => {
  const handleClick = () => {
    history.push(`${match.url}${linkUrl}`)
  }

  return (
    <div className={size !== undefined ? `${size} card` : 'card'} onClick={handleClick}>

      <div className="background-img" style={{
        backgroundImage: `url(${imageUrl})`}} />

      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  )
}

export default withRouter(Card);