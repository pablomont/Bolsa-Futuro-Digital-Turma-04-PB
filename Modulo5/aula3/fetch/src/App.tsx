import { useState } from "react";

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);
  const [sculptureList, setScuptureList] = useState<any[]>([]);

  function carregarDados() {
    fetch("https://6945f858ed253f51719cbbb6.mockapi.io/sculptures")
      .then((response) => response.json())
      .then((data) => setScuptureList(data));
  }

  function handleNextClick() {
    setIndex(index + 1);
  }

  function handleMoreClick() {
    setShowMore(!showMore);
  }

  const sculpture = sculptureList[index];

  if (sculptureList.length === 0) {
    return(
      <div>
      <h1>Minha Galerias</h1>
      <p>Os dados estão no servidor</p>
      <button onClick={carregarDados}>Carregar Dados</button>
    </div>

    )
  }

  return (
    <>
      <button onClick={carregarDados}>Carregar Dados</button>{" "}
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
