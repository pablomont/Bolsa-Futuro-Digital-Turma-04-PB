function Item({name, isPacked, importancia} : any){
    let importanciaContent = importancia !== 0 ? <i>Importância: {importancia}</i> : null
    let itemContent = name
    if (isPacked){
        itemContent = (
                name + '✅'
            )
    }
    else {
        itemContent = name + '❌'
    }
    return (<li className="Item">{itemContent}{importanciaContent}</li>)

//return (
//    <li className="Item">
//        {isPacked ? name + '✅' : name}
//    </li>
//)

}
//}

export default function PackingList(){
 return(
    <section>
        <h1>Lista de Bagagem da Sally Ride</h1>
        <ul>
            <Item
                isPacked = {true}
                name = "Traje Espacial"
                importancia = {9}
            />
            <Item
                isPacked = {true}
                name = "Capacete com folha dourada"
                importancia = {0}
            />
            <Item
                isPacked = {false}
                name = "Foto do tam"
                importancia = {6}
            />
        </ul>
    </section>
 )
}