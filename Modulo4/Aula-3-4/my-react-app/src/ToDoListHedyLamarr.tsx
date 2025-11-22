export default function Gallery(){
const avatarUrl = "https://i.imgur.com/7vQD0fPs.jpg"
const description = "Gregorio Y. Zara"
  return (
<>
   <img
      className="avatar"
      src={avatarUrl}
      alt={description}
    />
</>
    
  )
}