import "./App.css";

function Button ({onClick, children}: any){
return (
  <button onClick={onClick}>
    {children}
  </button>
)
}
function PlayButton({movieName}: any) {

  function HandlePlayClick(){
    alert(`Playing ${movieName}`)
  }

    return <button onClick={HandlePlayClick}>Play {movieName}</button>       
}

function UploadButton() {
    return <button onClick={() => alert('Uploading')}>Upload</button>       
}

export default function ToolBar(){
  return (
    <>
      <PlayButton movieName="Dune: part 2"></PlayButton>
      <UploadButton />
    </>
  )
}