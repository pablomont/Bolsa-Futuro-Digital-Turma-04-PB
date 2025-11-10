import './App.css'

function App() {
  return (
    <>
    <Gallery/>
    </>

  )
}

function Gallery(){
  return (
    <div>
      <h1>Cientistas incriveis</h1>
      <Profile/>
      <Profile/>
      <Profile/>
    </div>
  )
}

function Profile(){
  return (
    <img src = "https://citacoes.in/media/https://citacoes.in/media/authors/albert-einstein.jpg/albert-einstein.jpg" 
    alt=""
    width="20%"/>
  )

}

export default App
