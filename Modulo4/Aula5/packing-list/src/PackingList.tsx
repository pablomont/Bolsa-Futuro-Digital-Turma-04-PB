function Item({ name, isPacked }: any) {
let itemContent = name
if(isPacked){
    itemContent = name + '✅'
}
return <li className="item">{itemContent}</li>
}
//     return (
//         <li className="item">
//           {isPacked ? name + '✅' : name}
//         </li>
//   )
// }

export default function PackingList() {
  return (
    <section>
      <h1>Lista De Bagagem da Sally Ride</h1>
      <ul>
        <Item isPacked={false} name="Traje Espacial" 
        />
        <Item isPacked={true} name= "Capacete com folha dourada "
        />
         <Item isPacked={false} name= " Foto do tam  "
         />
      </ul>
    </section>
  );
}
