import { useState } from "react";


export default function Gallery() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);
  const [sculptureList, setSculptureList] = useState<any[]>([]);

  function carregarDados(){
      fetch("https://api.npoint.io/ea21dc9c530d2018335f")
      .then((response)=> response.json())
      .then((data) => setSculptureList(data));
  }
  
  function handleNextClick() {
    setIndex(index + 1);
  }

  function handleMoreClick() {
    setShowMore(!showMore);
  }

  const sculpture = sculptureList[index];
  if(sculptureList.length ===0){
    return(
      <div>
        <h1>Minha Galerias</h1>
        <p>Os dados estão no servidor</p>
        <button onClick={carregarDados}>Carregar dados</button>
      </div>
    )
  }
  return (
    <>
      <button onClick={handleNextClick}>Next</button>{" "}
      <h2>
        <i>{sculpture.name} </i>
        by {sculpture.artist}
      </h2>
      <h3>
        ({index + 1} of {sculptureList.length})
      </h3>
      <button onClick={handleMoreClick}>
        {showMore ? "Hide" : "Show"} details
      </button>
      {showMore && <p>{sculpture.description}</p>}
      <img src={sculpture.url} alt={sculpture.alt} />
    </>
  );
}
