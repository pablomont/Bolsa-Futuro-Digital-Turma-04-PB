function Item({ name, isPacked, importance }: any) {
// let itemContent = name
// if(isPacked){
//     itemContent = (
//         <del>
//             name + '✅'
//         </del>
//      name + '✅'
// }
// return <li className="item">{itemContent}</li>
// }

  return (
    <li className="item">
      {isPacked ? name + " ✅" : name + " ❌"}
      {importance == 0 }
      ? <i>(Importancia: {importance}) </i>
    </li>
  );
}
  
export default function PackingList() {
  return (
    <section>
      <h1>Lista De Bagagem da Sally Ride</h1>
      <ul>
        <Item isPacked={false} name="Traje Espacial" importance = {9}
        />
        <Item isPacked={true} name= "Capacete com folha dourada " 
        />
         <Item isPacked={false} name= " Foto do tam  " importance = {6}
         />
      </ul>
    </section>
  );
}
