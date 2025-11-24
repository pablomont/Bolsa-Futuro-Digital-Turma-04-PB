function Item({name, IsPacked, importance}:any){
    /*
    let itemContent = name;
    if(IsPacked){
            itemContent = (
                <del>
                {name +"✅"}
                </del>
            )
        }
        return (
            <li className="item">
                {itemContent}
            </li>
        );*/
        return(
        <li className="item">
            {IsPacked ? name + "✅":  name + "❌"}
            {importance !== 0 && <i>(Importância: {importance})</i>}
        </li>
    )
}
 
     


export default function PackingList(){
    return(
        <section>
        <h1>Lista de Bagagem da Sally Ride</h1>
        <ul>
        <Item 
            IsPacked= {true}
            name="Traje espacial"
            importance= {9}
        />
        </ul>
        <ul>
        <Item
            IsPacked={true}
            name="Capacete com folha dourada."
            importance={0}
        />
        </ul>
        <ul>
        <Item
            IsPacked={false}
            name="Foto do tam"
            importance={6}
        />
        </ul>
        </section>
    )
}