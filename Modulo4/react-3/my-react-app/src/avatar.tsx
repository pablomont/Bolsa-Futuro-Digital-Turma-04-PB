import { getImageUrl } from "./utils";

export default function Avatar({ person, size=100 } : any) {
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