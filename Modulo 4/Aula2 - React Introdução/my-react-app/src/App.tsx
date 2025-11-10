import './App.css'

function App() {
  return (
    <>
    <h1>lá, Mundo!</h1>
    <Profile/>
    </>
  )

function Gallery(){
    return (
      <div>
        <h1>cientistas incriveis</h1>
        <Profile/>
        <Profile/>
        <Profile/>
        </div>
    );
  }
}
function Profile(){
  return <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Tesla_circa_1890.jpeg/895px-Tesla_circa_1890.jpeg" alt=""/>
}

export default App
