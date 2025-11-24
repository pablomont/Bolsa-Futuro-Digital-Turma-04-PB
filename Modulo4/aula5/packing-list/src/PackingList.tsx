function Item( { name, importance, isPacked } : any ) {
    // let itemContent = name
    // if (isPacked) {
    //     itemContent = (
    //         <del>
    //             {name + " ✅"}
    //         </del> 
    //     )
    // }
    // return (<li className="item">{itemContent}</li>)

    return (
        <li className="item">
            { isPacked ? name  + ' ✅' : name  + ' ❌'}
            {importance !== 0 && <i>(Importância: {importance})</i>}
        </li>
    )
}


export default function PackingList(){
    return (
        <section>
            <h1>Lista de Bagagem da Sally Ride</h1>
            <ul>
                <Item
                isPacked={true}
                name="Traje Espacial"
                importance = {9}
                
                
                />
                <Item
                isPacked={true}
                name="Capacete com folha dourada"
                 importance = {0}
                />
                <Item
                isPacked={false}
                name="Foto do Tam"
                 importance = {6}
                />
            </ul>
        </section>
    )
}