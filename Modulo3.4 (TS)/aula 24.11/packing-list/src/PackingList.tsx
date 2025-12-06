function Item({ name, isPacked, importance}: any) {

  //let itemContent = name

  //if (isPacked) {
    //itemContent = (

      //<del>
      //  {name + '✅'}
      //</del>
    //)
    
    //return <li className="item">{name} ✅</li>
  //}

  //return <li className="item">{itemContent}</li>
//}

  const importanceText =
    importance && importance !== 0 ? ` (Importância: ${importance})` : null

  return (
    <li className="item">
      {isPacked ? `${name} ✅` : `${name} ❌`}
      <i>{importanceText}</i>
    </li>
  );
}

export default function PackingList() {
  return (
    <section>

      <h1>Packing List</h1>
      <ul>
        <Item
          isPacked={true}
          name="Traje espacial" 
          importance={9}
          />

        <Item
          isPacked={true}
          name="Capacete com Folha dourada" 
          importance={0}
          />

        <Item
          isPacked={false}
          name="Foto do Tam" 
          importance={6}
          />
      </ul>

    </section>
  )
}