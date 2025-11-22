import { getImageUrl } from "./utils";

function Avatar({ person, size } : any) {
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

export default function Profile() {
  return (
    <Avatar
      person={{
        name: "Lin Lanying",
        urlId: "1bX5QH6",
      }}
      size={100}
    />
  );
}
