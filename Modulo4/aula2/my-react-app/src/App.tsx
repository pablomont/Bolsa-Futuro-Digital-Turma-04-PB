import './App.css'


export default function App() {

  return (
    <>
      <Gallery/>
    </>
  )
}
function Gallery(){
    return (
      <div>
        <h1>Cientistas incríveis</h1>
        <Profile/>
        <Profile/>
        <Profile/>
      </div>
    )
}
function Profile(){
  return(
    <img src="https://super.abril.com.br/wp-content/uploads/2021/04/Marie-Curie-a-polonesa-mais-brilhante-da-historia.png?crop=1&resize=1212,909" alt="" width="30%"/>
  )
}


