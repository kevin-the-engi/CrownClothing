import React, { useState, useEffect } from 'react';
import data from '../../data/shopData.js';

import Collection from '../Collection/Collection.jsx';

const ShopPage = () => {
  const [shopData, setShopData] = useState([]);

  useEffect(() => {
    setShopData(data);
  })

  return (
    <div className="shop-page">
      {
        shopData.map(({ id, ...otherCollectionProps }) => (
          <Collection
            key={id}
            {...otherCollectionProps}
          />
        ))
      }
    </div>
  )
}

export default ShopPage;