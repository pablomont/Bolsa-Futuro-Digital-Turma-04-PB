function Avatar() {
  return (
    <img
      className="avatar"
      src="https://i.imgur.com/1bX5QH6.jpg"
      alt="Lin Lanying"
      width={100}
      height={100}
    />
  );
}

export default function Profile() {
  return (
    <Avatar />
  );
}

// function getImageUrl(person, size = 's') {
//   return (
//     'https://i.imgur.com/' +
//     person.imageId +
//     size +
//     '.jpg'
//   );
// }