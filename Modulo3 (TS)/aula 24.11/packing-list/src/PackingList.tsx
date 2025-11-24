function Item({ name, isPacked }: any) {
  let itemContent = name
  if (isPacked) {
    itemContent = name + " ✅"
    //return <li className="item">{name} ✅</li>
  }
  return <li className="item">{itemContent}</li>
}

  //return (
    //<li className="item">
      //{isPacked ? name + "✅" : name}
    //</li>
  //)
//}

export default function PackingList() {
  return (
    <section>

      <h1>Packing List</h1>
      <ul>
        <Item
          isPacked={true}
          name="Traje espacial" />

        <Item
          isPacked={true}
          name="Capacete com Folha dourada" />

        <Item
          isPacked={false}
          name="Foto do Tam" />
      </ul>

    </section>
  )
}