import { useState } from "react";

export default function Gallery() {
  const [currentId, setCurrentId] = useState(1);
  const [showMore, setShowMore] = useState(false);
  const [sculpture, setSculpture] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false); 

  function buscarEscultura(id: number) {
    setIsLoading(true); 
    setSculpture(null);
    const url = `https://api.npoint.io/ea21dc9c530d2018335f`;
    
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setSculpture(data);
        setIsLoading(false); 
      })
      .catch((error) => {
        console.error("Erro ao buscar escultura:", error);
        setIsLoading(false); 
      });
  }
  
  function carregarDados() {
    buscarEscultura(1);
  }

  function handleNextClick() {
    const proximoId = currentId + 1;
    setCurrentId(proximoId);
    buscarEscultura(proximoId);
  }

  function handleMoreClick() {
    setShowMore(!showMore);
  }

  if (!sculpture && !isLoading) {
    return (
      <div>
        <h1>Minha Galeria</h1>
        <p>Clique no botão para carregar a primeira escultura</p>
        <button onClick={carregarDados}>Carregar Galeria</button>
      </div>
    );
  }


  if (isLoading) {
    return (
      <div>
        <h1>Minha Galeria</h1>
        <p>Carregando escultura #{currentId}...</p>
      </div>
    );
  }


  return (
    <>
      <button onClick={handleNextClick}>Next</button>{" "}
      <h2>
        <i>{sculpture.name} </i>
        by {sculpture.artist}
      </h2>
      <h3>(ID: {currentId})</h3>
      <button onClick={handleMoreClick}>
        {showMore ? "Hide" : "Show"} details
      </button>
      {showMore && <p>{sculpture.description}</p>}
      <img src={sculpture.url} alt={sculpture.alt} />
    </>
  );
}