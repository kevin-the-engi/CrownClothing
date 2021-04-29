import React from 'react';
import './Collection.scss';

const Collection = ({ title, items }) => {
  return (
    <div className="collection">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {
          items
            .filter((item, i) => i < 4)
            // filters 4 items
            .map(item => (
              <div key={item.id}>
                {item.name}
              </div>
          ))
        }
      </div>
    </div>
  )
}

export default Collection;