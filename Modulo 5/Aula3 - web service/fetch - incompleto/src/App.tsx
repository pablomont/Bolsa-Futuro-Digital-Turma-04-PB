import { useState } from "react";


export default function Gallery() {
  const [currentId, setCurrentId] = useState(1);
  const [showMore, setShowMore] = useState(false);
  const [sculptureList, setSculptureList] = useState<any>(null);

  function buscarPortId(id: number){
    setSculpture(null);

    fetch(`https://6945f858ed253f51719cbbb6.mockapi.io/sculptures(id)`)
    .then(response => response.json())
    .then(data => setSculptureList(data))
  }

  function handleCarregarClick() {
    buscarPorId(currentId); //"botão next" etapa 3
  }

   function handleNextClick() {
   const proximo = currentId + 1
  }

  function handleMoreClick() {
    setShowMore(!showMore);
  }

  let sculpture = sculptureList[index];

  if (sculptureList.length === 0){
    return(
      <div>
        <h1>Minha Galeria</h1>
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
