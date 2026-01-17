interface XicaraProps{
  convidado: number
}

function Xicara({convidado} : XicaraProps){
 return <h2>Xícara de chá para o convidado #{convidado}</h2>
}

export default function ConjuntoDeCha(){
  const xicaras: JSX.Element[] = []

  for (let i = 1 ; i<=12 ; i++){
    xicaras.push (<Xicara key={i} convidado={i}/>)
  }
  return(
    <>
      <Xicara convidado={1}/>
      <Xicara convidado={2}/>
      <Xicara convidado={3}/>
    </>
  )
}