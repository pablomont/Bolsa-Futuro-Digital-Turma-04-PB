import { sculptureList } from './data.ts';
import { useState } from 'react'

export default function Gallery() {
  const [index, steIndex] = useState(0)
  const [showMore, set]


  function handleClick() {
    steIndex(index + 1)
  }

  function handleMoreClick(){
    steShowMore(!showMore)
  }

  let sculpture = sculptureList[index];
  return (
    <>
      <button onClick={handleClick}>
      </button>
      </button>
      show details
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
        {sculpture.description}
      </p>
    </>
  );
}
