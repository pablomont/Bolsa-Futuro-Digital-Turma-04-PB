import "./App.css";

// function App() {
//   return (
//     <>
//       Hello World
//     </>
//   )
// }

export default function Button(){

    // function handleClick(){
    //   alert('Você Clicou')
    // }

  return (
    <button 
    onClick={() => alert("Voce clicou ")} 
    >
      clique aqui 
    </button>

    
  );

}

