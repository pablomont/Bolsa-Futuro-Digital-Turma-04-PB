import getImageUrl from "./utils";

function Avatar({person, size}: any) {
  return (
    <img
      className="avatar"
      src={getImageUrl(person)}
      //src="https://i.imgur.com/1bX5QH6.jpg"
      alt={person.name}
      width={size}
      height={size}
    />
  );
}

function Card({children}){
    return(
        <div className="card">
            {children}
        </div>
    );
}

export default function Profile() {
  return (
    <>
    <Card>
      <Avatar person={{name:'Lin Lanying',imageId: 'lbx5QH6',}} size={100} />
    </Card>

    <Card>
      <Avatar person={{name:'Allan Turing',imageId: 'lsEoPwV',}} size={200} />
    </Card>
    </>
  );
}