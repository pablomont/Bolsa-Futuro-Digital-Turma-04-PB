function Item({ name, isPacked, importance }: any) {
    // return (
    // <li className="item"> 
    //     {isPacked ? name + '✅' : name} 
    // </li>);
    
    return (
        <li className="item">
        {isPacked ? `${name} ✅` : `${name} ❌`}
        <i>{importance && importance !== 0 ? ` (Importância: ${importance})` : null}</i>
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
                    name="Traje espacial" importance={9}/>
                <Item isPacked={true}
                    name="Capacete com folha dourada" importance={0}/>
                <Item isPacked={false}
                    name="Foto do Tam" importance={6}/>
            </ul>
        </section>
    )
}

