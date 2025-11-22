import "./App.css";

function App() {
  return (
    <>
      <Gallery/>
    </>
  );
}

function Gallery(){
  return <div>
    <h1>Cientistas incriveis</h1>
    <Profile></Profile>
    <Profile></Profile>
    <Profile></Profile>
  </div>
}

function Profile(l) {
  return (
    <img
      src="https://media.tenor.com/w7SYVEtRbtIAAAAe/eu-sabo-muito.png"
      alt="Foto de Rodrigues"
      width="20%"
    />
  );
}

export default App;
