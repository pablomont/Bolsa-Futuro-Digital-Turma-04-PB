import { useState } from "react";

export default function Gallery() {
  const [currentId, setCurrentId] = useState(1);
  const [sculpture, setSculpture] = useState<any>(null);
  const [showMore, setShowMore] = useState(false);

  function handleNextClick() {
    const proximo = currentId + 1;
    buscarPorId(currentId);
    setCurrentId(proximo);
  }

  function buscarPorId(id: any) {
    // Dica: Limpe a escultura atual antes do fetch para simular carregamento
    setSculpture(null);

    const url = `https://6945f858ed253f51719cbbb6.mockapi.io/sculptures/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setSculpture(data));
  }

  function handleMoreClick() {
    setShowMore(!showMore);
  }

  if (sculpture === null) {
    return (
      <div>
        <h1>Minha Galeria</h1>
        <p>Os dados estão no servidor</p>
        <button onClick={handleNextClick}>Carregar dados</button>
      </div>
    );
  }

  return (
    <>
      <button onClick={handleNextClick}>
        Next {`(Buscar ID: ${currentId})`}
      </button>
      <h2>
        <i>{sculpture.name} </i>
        by {sculpture.artist}
      </h2>
      <h3>{`Estátua nº ${currentId - 1}`} </h3>
      <button onClick={handleMoreClick}>
        {showMore ? "Hide" : "Show"} details
      </button>
      {showMore && <p>{sculpture.description}</p>}
      <img src={sculpture.url} alt={sculpture.alt} />
    </>
  );
}
