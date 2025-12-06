// import "./App.css";

function Button({ onClick, children }: any) {
  return (
    <button onClick={onClick}>
      {children}
    </button>
  );
}

// function PlayButton({ movieName}: any) {
//   function handlePlayClick() {
//     alert(`Playing ${movieName}`);
//   }

//   return (
//     <Button onClick={handlePlayClick}>
//       Play {movieName}
//     </Button>
//   );
// }

// function UploadButton() {
//   return (
//     <Button onClick={() => alert("Uploading")}>
//       Upload Image
//     </Button>
//   );
// }

// export default function ToolBar() {
//   return (
//     <>
//       <PlayButton movieName="Dune Part 2" />
//       <UploadButton />
//     </>
//   );
// }

export default function ToolBar() {
  return (
    <div 
      className="ToolBar" 
      onClick={(e) => {
        e.stopPropagation()
        alert('Você clicou na div');
      }}
    >
      <button onClick={() => alert('Voce clicou no play')}>
        Play Movie
      </button>

      <button onClick={() => alert('Voce clicou no upload')}>
        Upload Image
      </button>
    </div>
  );
}
