import React from 'react';
import './Collection.scss';

import CollectionItem from '../CollectionItem/CollectionItem.jsx';

const Collection = ({ title, items }) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {
          items
            .filter((item, i) => i < 4)
            // filters 4 items
            .map(({ id, ...otherItemProps }) => (
              <CollectionItem
                key={id}
                {...otherItemProps}
              />
            ))
        }
      </div>
    </div>
  )
}

export default Collection;