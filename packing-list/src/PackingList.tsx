function Item({ name, isPacked }: any) {
    
    if (isPacked)
        return <li className="item">{name}✅</li>
    else
        return <li className="item">{name}❌</li>    
    
}

export default function PackingList() {
    return (
        <section>
            <h1>Lista de Bagagem da Sally Ride</h1>
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
