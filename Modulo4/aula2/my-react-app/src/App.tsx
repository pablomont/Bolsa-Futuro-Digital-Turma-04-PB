import './App.css'

export default function App() {
  
  return (
    <>
    <Gallery />
    </>
  )
}

function Gallery(){
  return (
    <div>
      <h1>Cientistas incríveis</h1>
      <Profile />
      <Profile />
      <Profile />
    </div>
  )
}

function Profile(){
  return(
    <img src="https://s.ebiografia.com/img/ci/en/cientistas_famosos_1.jpg?auto_optimize=low&width=655" 
    alt="Albert Einstein" 
    width = '20%' />
  )
}
