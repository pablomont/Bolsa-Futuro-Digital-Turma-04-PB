import './App.css'

function App() {  
  return <Gallery />
}

  function Gallery() {
    return (
      <div>
        <h1>Cientistas incriveis</h1>
        <Profile />
        <Profile />
        <Profile />
    
      </div>
    )
    
  }
 
  
 
 function Profile() {
  return <img src="https://s.ebiografia.com/img/ci/en/cientistas_famosos_2.jpg?auto_optimize=low"
   alt="" />
 }

export default App
