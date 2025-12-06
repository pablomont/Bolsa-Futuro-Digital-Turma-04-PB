import "./App.css";

// function App() {
//   return (
//     <>
//       Hello World
//     </>
//   )
// }
// export default function Button(){
//   function handleClick(){
//     alert('you clicked')
//   }
//   return (
  
//     <button onClick = {handleClick()}>
//       I don't know anything
//     </button>
//   )
// }

function Button({ onClick, children }: any) {
  return (
    <button onClick={onClick}>
      {children}
    </button>
  )
}

function PlayButton({ movieName }: any) {

  function handlePlayClick() {
    alert(`Playing ${movieName}`)
  }

  return <Button onClick={handlePlayClick}>Play {movieName}</Button>;
}

function UploadButton() {
  return <Button onClick={() => alert('Uploading')}>Upload Image</Button>;
}

export default function ToolBar() {
  return (
    <div
      className="toolBar"
      onClick={() => {
        alert("Você clicou na div");
      }}
    >

      <button
        onClick={(e) => {
          e.stopPropagation();
          alert("Você clicou no play");
        }}
      >
        Play movie
      </button>

      <button
        onClick={() => {
          alert("Você clicou no upload");
        }}
      >
        Upload Image
      </button>

    </div>
  );
}