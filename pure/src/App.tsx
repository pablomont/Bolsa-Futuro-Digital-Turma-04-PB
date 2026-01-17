interface XicaraProps{
  convidado: number
}
function Xicara({ convidado }: XicaraProps) {
  return <h2>Xicara de chá para o convidado #{convidado}</h2>;
}

export default function ConjuntoDeCha() {
  return (
    <>
      
      <Xicara convidado={1} />
      <Xicara convidado={2} />
      <Xicara convidado={3} />
    </>
  );
}
