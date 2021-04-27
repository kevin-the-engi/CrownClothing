import React, { useState, useEffect } from 'react';
import './Directory.scss';
import data from '../../dummyData.js';

import Card from '../Card/Card.jsx';

const Directory = (props) => {
  const [sections, setSections] = useState([]);

  useEffect(() => {
    setSections(data);
  })

  return (
    <div className="directory">
      {
        sections.map(({ title, imageUrl, size, id }) => (
          <Card
            title={title}
            imageUrl={imageUrl}
            size={size}
            key={id}
          />
        ))
      }
    </div>
  )
}

export default Directory;