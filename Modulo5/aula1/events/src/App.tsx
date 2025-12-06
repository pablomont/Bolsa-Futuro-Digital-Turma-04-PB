import "./App.css";

// function Button({onClick, children} : any){
//   return (
//     <button onClick={onClick}>
//       {children}
//     </button>
//   )
// }

// function PlayButton({ movieName } : any){

//   function handlePlayClick(){
//     alert(`Playing ${movieName}`)
//   }

//   return <Button onClick={handlePlayClick}>Play {movieName}</Button>;
// }

// function UploadButton(){
//   return <button onClick={() => alert('Uploading')}>Upload Image</button>;
// }

// export default function ToolBar(){
//   return (
//     <>
//     <PlayButton movieName="Dune Part 2"></PlayButton>
//     <UploadButton />
//     </>
//   )
// }

export default function ToolBar(){
  return (
    <div 
    className="toolBar" 
    onClick={() => {
      alert('Você clicou na div');
    }}
    >
      <button 
      onClick={(e) => {
        e.stopPropagation()
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


