import './App.css'

function App() {

  return (
    <>
      <Gallery/>
    </>
  )
}

function Gallery(){
  return(
    <>
      <h1>Cientistas incríveis</h1>
      <Profile/>
      <Profile/>
      <Profile/>
    </>
  )
}

function Profile(){
  return(
    <img src="https://rollingstone.com.br/wp-content/uploads/jim_parsons_como_sheldon_cooper_em_the_big_bang_theory_foto_reproducao__imdb.jpg"
    alt=""
    width = "30%"/>
  )

}

export default App