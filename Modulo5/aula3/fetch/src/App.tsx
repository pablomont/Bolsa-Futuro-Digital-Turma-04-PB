import { useState } from "react";

export default function Gallery() {
  const [currentId, setCurrentId] = useState(1);
  const [showMore, setShowMore] = useState(false);
  const [sculpture, setSculpture] = useState<any>(null);

  function buscarPorId(id:number) {
    setSculpture(null);

    const url = `https://6945f858ed253f51719cbbb6.mockapi.io/sculptures/${id}`;

    fetch(url)
    .then(res => res.json())
    .then(data => setSculpture(data));
  }

  function carregarGaleria() {
    buscarPorId(currentId);
  }

  function handleNextClick() {
    const proximo = currentId + 1;
    setCurrentId(proximo);
    buscarPorId(proximo);
     
  }

  function handleMoreClick() {
    setShowMore(!showMore);
  }

  if(sculpture === null){
    return(
      <div>
        <h1>Minha Galeria</h1>
        <p>Os dados estão no servidor</p>
        <button onClick={carregarGaleria}>Carregar Galeria</button>
      </div>
    )
  }

  return (
    <>
      
      <button onClick={handleNextClick}>Next</button>
      <h2>
        <i>{sculpture.name} </i>
        by {sculpture.artist}
      </h2>
      <h3>
        (ID: {currentId})
      </h3>
      <button onClick={handleMoreClick}>
        {showMore ? "Hide" : "Show"} details
      </button>
      {showMore && <p>{sculpture.description}</p>}
      <img src={sculpture.url} alt={sculpture.alt} />
    </>
  );
}
