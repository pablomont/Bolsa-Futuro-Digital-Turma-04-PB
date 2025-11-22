import getImageUrl from "./utils";

function Avatar({person, size} :any) {
  return (
    <img
      className="avatar"
      //src="https://i.imgur.com/1bX5QH6.jpg"
      src= {getImageUrl(person)} 
      alt={person.name}
      width={size}
      height={size}
    />
  );
}

function Card({children}: any){
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
        name: "Lin Lanying",
        imageId: "1bX5QH6"
      }}
      size={100}
      />
      </Card>
      
      <Avatar
      person={{
        name: "Allan Turing",
        imageId: "lsEoPwV"
      }}
      />
      </>
  );
}

//podemos colcoar a função em arquivo separado como utils.ts
