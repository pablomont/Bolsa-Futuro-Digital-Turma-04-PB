let convidado = 0

function Xicara(){
  convidado = convidado +1
  return <h2>Xícara de chá para o convidado #{convidado}</h2>
}

export default function ConjuntoDeCha(){
  return(
    <>
      <Xicara />
      <Xicara />
      <Xicara />
    </>
  )
}
