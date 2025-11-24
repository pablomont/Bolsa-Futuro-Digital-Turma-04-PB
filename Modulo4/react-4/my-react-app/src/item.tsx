function Item ({name, isPacked, rank}: any ) {
    
    var itemContent = name
    var rankPacket = rank !== 0 ? ` (importancia: ${rank})` : ""
    if(isPacked){
        itemContent = name + "✅"
    }
    else {
        itemContent = name + "❌"
    }
    return (
        <li className="Item">{itemContent} <i>{rankPacket}</i></li>
    )
}

export default function PackingList() {
    return (
        <section>
        <h1>Lista de bagagem da Sally Ride</h1>
        <ul>
            <Item
                name = "baóbas em um tamanho muito pequeno"
                isPacked = {true}
                rank = {9}
            />
            <Item
                name = "Roupas suiças importadas da armênia"
                isPacked = {true}
                rank = {0}
            />
            <Item
                name = " jogo de tabuleiro de minimundos"
                isPacked = {false}
                rank = {6}
            />
        </ul>
        </section>
    )
}