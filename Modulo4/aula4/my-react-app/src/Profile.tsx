import getImageUrl from "./util";
function Avatar({ person, size = 100 }: any) {
  return (
    <img
      className="avatar"
      src={getImageUrl(person)}
      alt={person.name}
      width={size}
      height={size}
    />

  );
}

function Card({ children }: any) {
  return (
    <div className="card">
      {children}
    </div>
  );
}


export default function Profile() {
  return (
    <>
      <Card>
        <Avatar person={{
          name: 'Lin Lanying',
          imageId: '1bX5QH6'
        }}
        // size={100}
        />
      </Card>
      <Card>
        <Avatar person={{
          name: "Allan Turing",
          imageId: 'lsEoPwV'
        }}
        // size={200}
        />
      </Card>

    </>
  );
}