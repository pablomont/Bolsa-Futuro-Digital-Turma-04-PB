function Item({name, isPacked}: any){
    let itemContent = name
    if (isPacked){
        itemContent = name + "✅"
    }
    else {
        itemContent = name + "❌"
    }
    return <li className="item">{itemContent}</li>
}

export default function PackingList(){
    return (
        <section>
            <h1> Lista de Bagagem da Sally Ride </h1>
            <ul>
                <Item 
                    isPacked={true}
                    name="Traje Espacial"
                />
                <Item 
                    isPacked={true}
                    name="Capacete com folha dourada"
                />
                <Item 
                    isPacked={false}
                    name="Foto do Tam"
                />
            </ul>
        </section>
    )
}

