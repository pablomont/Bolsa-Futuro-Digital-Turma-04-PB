import { useState } from "react";

export default function Gallery() {
  const [currentId, setCurrentId] = useState(0);
  const [showMore, setShowMore] = useState(false);
  const [currentSculpture, setCurrentSculpture] = useState <any> (null)
 
function carregarDados(id: number){
  const url = `https://6945f858ed253f51719cbbb6.mockapi.io/sculptures/${id}`
  fetch(url)
  .then(response => response.json())
  .then(data => setCurrentSculpture(data))
}

  function handleNextClick() {
    const proximo = currentId + 1;
    setCurrentId(proximo)
  }

  function handleMoreClick() {
    setShowMore(!showMore);
  }

  if (!currentSculpture){
    return(
      <div>
        <h1>Minha galeria</h1>
        <p>Os dados estão no servidor</p>
        <button onClick={() => carregarDados(currentId)}>Carregar dados</button>
      </div>
    )
  }

  let sculpture = currentSculpture[currentId];

  return (
    <>
      <button onClick={handleNextClick}>Next</button>{" "}
      <h2>
        <i>{sculpture.name} </i>
        by {sculpture.artist}
      </h2>
      <h3>
        ({currentId + 1} of {currentSculpture.length})
      </h3>
      <button onClick={handleMoreClick}>
        {showMore ? "Hide" : "Show"} details
      </button>
      {showMore && <p>{sculpture.description}</p>}
      <img src={sculpture.url} alt={sculpture.alt} />
    </>
  );
}