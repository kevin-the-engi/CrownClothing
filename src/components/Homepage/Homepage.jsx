import React from 'react';
import './Homepage.scss';

const Homepage = () => {
  return (
    <div className="homepage">
      <div className="directory">
        <div className="card">
          <div className="content">
            <h1 className="title">HATs</h1>
            <span className="subtitle">SHOW NOW</span>
          </div>
        </div>
        <div className="card">
          <div className="content">
            <h1 className="title">JACKETS</h1>
            <span className="subtitle">SHOW NOW</span>
          </div>
        </div>
        <div className="card">
          <div className="content">
            <h1 className="title">SNEAKERS</h1>
            <span className="subtitle">SHOW NOW</span>
          </div>
        </div>
        <div className="card">
          <div className="content">
            <h1 className="title">WOMENS</h1>
            <span className="subtitle">SHOW NOW</span>
          </div>
        </div>
        <div className="card">
          <div className="content">
            <h1 className="title">MENS</h1>
            <span className="subtitle">SHOW NOW</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Homepage;