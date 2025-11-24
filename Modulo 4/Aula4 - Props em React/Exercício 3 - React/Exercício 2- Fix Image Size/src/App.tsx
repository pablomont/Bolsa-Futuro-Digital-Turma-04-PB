import "./styles.css";
import { getImageUrl } from "./utils";

function Avatar({ person, size }) {
  const thumbnailsize = size < 90 ? "s" : "b";

  return (
    <img
      className="avatar"
      src={getImageUrl(person.imageId, thumbnailsize)}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}

export default function Profile() {
  return (
    <div>
      <Avatar
        size={40}
        person={{
          name: "Gregorio Y. Zara",
          imageId: "7vQD0fP",
        }}
      />

      <Avatar
        size={120}
        person={{
          name: "Gregorio Y. Zara",
          imageId: "7vQD0fP",
        }}
      />
    </div>
  );
}
