import getImageUrl from "./utils";

function Avatar({person, size = 100}: any) {
  return (
    <img
      className="avatar"
      src={getImageUrl(person)}
     // "https://i.imgur.com/1bX5QH6.jpg"
      alt={person.name}
      width={size}
      height={size}
    />
  );
}

function Card({children} : any){
    return(
        <div className="card">
        {children}
        </div>
    )
}

export default function Profile() {
  return (
    <>
        <Card>
        <Avatar 
            person={{
                name: "Lin Lavyin",
                imageId: "1bx5QH6"
            }} 
           
        />
        </Card>
         <Avatar
    person={{
        name: "Allan turing",
        imageId: "lsEoPqV"
     }}
        
        />
    </>
  );
}

