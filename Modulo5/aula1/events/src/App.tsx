import "./App.css";

//function App() {
//return (
//<>
//Hello World
//</>
//)
//}
//function Button({ onClick, children }: any) {
  //return (
    //<button onClick={onClick}>
      //{children}
    //</button>
  //);

//}

//function PlayButton({ movieName }: any) {
  //function handleClick() {
  //alert("Clicou no botão!");
  //}
  //function handlePlayClick() {
    //alert(`Playing ${movieName}`);
  //}

  //return (<button onClick={handlePlayClick}>Play {movieName}</button>);
//}

//<button 
//onClick={() => {
//alert("Clicou no botão!");
//}}
//>
//Clique aqui
//</button>

//<button onClick={handleClick}>
//Clique aqui
//</button>



export default function UploadButton() {
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