import React from 'react';
import './gifItem.css'
const GifItem = (image) => {
  return (
    <li id='item'>
      <img src={image.gif.images.fixed_height.url} />
    </li>
  )
};

export default GifItem;
