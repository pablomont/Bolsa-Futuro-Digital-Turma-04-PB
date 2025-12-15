import { sculptureList } from './data.ts';
import { useState } from 'react';

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  function handleClick(){
    setIndex(index + 1)
  }

  function handleMoreClick(){
    setShowMore(!showMore)
  }

  let sculpture = sculptureList[index];
  return (
    <>
      <button onClick={handleClick}>
        Next
      </button>
      <button onClick={handleMoreClick}>
        { showMore ? "Hide" : "Show details"}
      </button>
      <h2>
        <i>{sculpture.name} </i> 
        by {sculpture.artist}
      </h2>
      <h3>  
        ({index + 1} of {sculptureList.length})
      </h3>
      <img 
        src={sculpture.url} 
        alt={sculpture.alt}
      />
      <p>
        {showMore && sculpture.description}
      </p>
    </>
  );
}