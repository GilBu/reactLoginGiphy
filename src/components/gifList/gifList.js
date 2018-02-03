import React from 'react';
import GifItem from '../gifItem/gifItem';
import './gifList.css';

const GifList = (props) => {
  const gifItems = props.gifs.map((image) => {
    return <GifItem key={image.id} gif={image} />
  });

  return (
    <ul className="list-holder">
      {gifItems}
    </ul>
  );
};

export default GifList;
