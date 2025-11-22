import './App.css'

function App() {


  return (
    <>
      <Gallery />
    </>
  )
}

function Profile(){
  return(
    <img src="https://p2.trrsf.com/image/fget/cf/774/0/images.terra.com/2013/03/14/einstein-arquivo-afp.jpg" 
    alt=""
    width= '10%' />
  )
}

function Gallery(){
  return(
    <div>
      <h1>Cientistas Incríveis</h1>
      <Profile/>
      <Profile/>
      <Profile/>
    </div>
  )
}

export default App
