import './App.css'

function App() {

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
function Profile() {
  return (
    <img src="https://www.google.com/imgres?q=alan%20turner&imgurl=https%3A%2F%2Fs1.static.brasilescola.uol.com.br%2Fimg%2F2019%2F09%2Falan-turing-be.jpg&imgrefurl=https%3A%2F%2Fbrasilescola.uol.com.br%2Fbiografia%2Falan-mathison.htm&docid=_dfUVYZvIt6MMM&tbnid=1VIXLO8IsAeccM&vet=12ahUKEwiQvoququiQAxX5A7kGHcgyJ1EQM3oECCQQAA..i&w=440&h=599&hcb=2&ved=2ahUKEwiQvoququiQAxX5A7kGHcgyJ1EQM3oECCQQAA" alt="" width="20%"/>
  )
}


export default App
