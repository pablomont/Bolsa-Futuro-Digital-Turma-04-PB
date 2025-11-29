function Item({name, isPack, importance} : any){
     let itemImportance = importance != 0 ? <i>Importância: {importance}</i> :null
     let itemContent = name
     if (isPack){
        itemContent = (
                name + "✅" 
        )
    }
    else{
        itemContent = name + "❌" 
    }
    return <li className="item">{itemContent} {itemImportance}</li> 
/*       return (
        <li className="item">
            {isPack ? name + '✅' : name + "❌"}
            
        </li>
    ) */
} 

export default function PackingList(){
    return(
        <>
        <section>
            <h1>Lista de Bagagem da Sally Ride</h1>
            <ul>
                <Item
                    isPack={false}
                    name="Traje Espacial"
                    inportance='9'
                />
                <Item
                isPack={true}
                name="Capacete com folha dourada"
                inportance='0'
                />
                <Item
                isPack={false}
                name="Foto do Tam"
                inportance='6'
                />
            </ul>
        </section>
        </>
    )
}