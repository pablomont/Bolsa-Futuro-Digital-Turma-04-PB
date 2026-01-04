import { useState } from "react";

export default function Gallery() {
  // 1. Novos estados: ID atual e objeto da escultura
  const [currentId, setCurrentId] = useState(1);
  const [sculpture, setSculpture] = useState<any>(null);
  const [showMore, setShowMore] = useState(false);
  
  // Total de esculturas disponíveis na API
  const totalSculptures = 12;

  // 2. Função que busca uma escultura específica por ID
  function buscarPorId(id: number) {
    // Limpa a escultura atual para simular carregamento
    setSculpture(null);
    
    // URL dinâmica com o ID concatenado (índice começa em 0)
    const url = `https://api.npoint.io/ea21dc9c530d2018335f/${id - 1}`;
    
    fetch(url)
      .then((response) => response.json())
      .then((data) => setSculpture(data));
  }

  // 3. Renderização Condicional:
  // Se a escultura for null, mostra apenas o botão de carregar
  if (sculpture === null) {
    return (
      <div>
        <h1>Minha Galeria de Arte</h1>
        <p>Os dados estão no servidor.</p>
        <button onClick={() => buscarPorId(currentId)}>
          Carregar Galeria via API
        </button>
      </div>
    );
  }

  function handleNextClick() {
    // Só avança se não estiver no último item
    if (currentId < totalSculptures) {
      const proximo = currentId + 1;
      setCurrentId(proximo);
      buscarPorId(proximo);
    }
  }

  function handlePreviousClick() {
    // Só volta se não estiver no primeiro item
    if (currentId > 1) {
      const anterior = currentId - 1;
      setCurrentId(anterior);
      buscarPorId(anterior);
    }
  }

  function handleMoreClick() {
    setShowMore(!showMore);
  }

  return (
    <>
      <button onClick={handlePreviousClick} disabled={currentId === 1}>
        Previous
      </button>{" "}
      <button onClick={handleNextClick} disabled={currentId === totalSculptures}>
        Next
      </button>{" "}
      <h2>
        <i>{sculpture.name} </i>
        by {sculpture.artist}
      </h2>
      <h3>
        ({currentId} of {totalSculptures})
      </h3>
      <button onClick={handleMoreClick}>
        {showMore ? "Hide" : "Show"} details
      </button>
      {showMore && <p>{sculpture.description}</p>}
      <img src={sculpture.url} alt={sculpture.alt} />
    </>
  );
}
