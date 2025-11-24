function Item({ name, isPacked }: any) {
    // return (
    // <li className="item"> 
    //     {isPacked ? name + '✅' : name} 
    // </li>);
    let itemContent = name;
    if (isPacked){
        itemContent = name + '✅'
    }
    return(
        <li className="item">
            {itemContent}
        </li>
    );
}

export default function PackingList() {
    return (
        <section>
            <h1>
                Lista de Bagagem de Sally Ride
            </h1>
            <ul>
                <Item isPacked={true}
                    name="Traje espacial" />
                <Item isPacked={true}
                    name="Capacete com folha dourada" />
                <Item isPacked={false}
                    name="Foto do Tam" />
            </ul>
        </section>
    )
}

