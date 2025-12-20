import "./App.css";

// function ToolBar(){
//   return (
//     <>
//     <PlayButton movieName="o retorno dos que não foram"/>
//     <UploadButton/>
//     </>
//   );
// }

// function Button({onClick, children} : any){
//   return <button onClick={onClick}> {children}</button>
// }

// function PlayButton({movieName}: any){
//   function handlePlayClick(){
//     alert(`Playing ${movieName}`)
//   }

//   return (<button onClick={handlePlayClick}> Play {movieName}</button>)
// }

// function UploadButton(){
//   return(
//     <button onClick={() => alert("Uploading")}>Upload image</button>
//   );
// }


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
          e.stopPropagation()
          alert("Você clicou no play");
        }}
      >
        Play movie
      </button>
      <button
        onClick={(e) => {
          e.stopPropagation()
          alert("Você clicou no upload");
        }}
      >
        Upload Image
      </button>
    </div>
  );
}
