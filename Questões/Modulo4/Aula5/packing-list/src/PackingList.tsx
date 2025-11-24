function Item({name, isPacked, importance}: any){
    let itemContent = name
    let importancia = importance
   
    isPacked ? itemContent = <del>{ name + "✅"} </del> : itemContent = name + "❌"; 
    
    if (importance < 0) {
        importancia = null;
    }
    else {
        importancia = importance
    }

    return ( 
        <li className="item">
            {itemContent} {importance > 0 ? <i>(Importância: {importance})</i> : null} 
        </li>
    );
}

export default function PackingList(){
    return (
        <section>
            <h1> Lista de Bagagem da Sally Ride </h1>
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

