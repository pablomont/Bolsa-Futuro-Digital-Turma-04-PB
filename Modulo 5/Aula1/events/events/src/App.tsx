import "./App.css";

/*
function App() {
  return (
    <>
     Hello World
     <button>
    </>
  )
}
*/
/*
export default function alertButton() {

  function handleclick() {
    alert("você clicou!");
  }
  return (
  
  <button 
  onClick={() => {
    alert ("você clicou");
  }}
  >
    clique aqui
    </button>

  
  <button onClick= {handleclick}>
    Clique Aqui
  </button>
  );
}
  */

/*
function Button({onclick, children }: any) {
  return (
    <button onClick=(onclick)>
    {children}
  </button>;
  )
}

function PlayButton({ movieName }: any) {

function handleClick(){
  alert(`Playing $(movieName)`)
}
  
  return <button onClick= {() => alert(message)}>{children}</button>;
}

function UploadButton({ message, children }: any) {
  return <button onClick= {() => alert(message)}>{children}</button>;
}

export default function ToolBar() {
  return (
    <>
    <AlertButton message="Reproduzindo">Reproduzir Filme</AlertButton>
    <AlertButton message="Enviado">Enviar Imagem</AlertButton>
    </>
  )
}
*/


export default function ToolBar (){
  return (
    <div className ="ToolBar" on onClick={() => {
        alert ('you clicked on toolbar!');
      }}>
      <button onClick={() => alert('Playing')}>
      Play movie
      </button>
      <button onClick={() => alert('uploading!')}>
        upload Image
      </button>
    </div>
  )

}