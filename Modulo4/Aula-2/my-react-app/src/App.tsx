import './App.css'

function App() {

  return (
    <>
      <Gallery></Gallery>
      <h1> <br /> </h1>
    </>
  )
}

function Profile(){
  return (
    <img src="https://static.wikia.nocookie.net/dublagem/images/f/ff/Albert-nstein.jpg/revision/latest/thumbnail/width/360/height/360?cb=20230807203421&path-prefix=pt-br"
    alt=""
    width="20%"/>
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
export default App
