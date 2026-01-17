interface ReceitaProps{
  pessoas: number;
}

function Receita({pessoas}: any){
  return (
    <div>
      <ol>
        <li>
          Ferva {pessoas} xícaras de água.
        </li>
        <li>
          Adicione {pessoas} colheres de chá e {0.5*pessoas} colheres de especiarias
        </li>
        <li>
          Adicione {0.5*pessoas} xícaras de leite para ferver com açúcar à gosto
        </li>
      </ol>
    </div>
  )
}

export default function App(){
  return (
    <section>
      <h1>Receita de Chá com Especiarias</h1>
      <h2>Para 2</h2>
      <Receita pessoas={2}/>

      <h2>Para 4 pessoas</h2>
      <Receita pessoas={4}/>
    </section>
  )
}

