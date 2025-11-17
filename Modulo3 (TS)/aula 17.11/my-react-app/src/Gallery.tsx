export default function TodoListHedyLamar() {
  const avatarUrl = "https://i.imgur.com/7vQD0fPs.jpg";
  const name = "Gregorio Y. Zara";

  return (
    <>
      {/* 
      <h1>Hedy Lamarr's Todos</h1>
      <img 
        src="https://cdn.britannica.com/95/133095-050-46953AA5/Hedy-Lamarr.jpg"
        width="20%"
        alt="Hedy Lamarr"
        className="photo" 
      />
      <ul>
        <li>Invent new traffic lights</li>
        <li>Rehearse a movie scene</li>
        <li>Improve the spectrum technology</li>
      </ul>

      <div className="intro">
        <h1>Welcome to my website!</h1>
      </div>

      <p className="summary">
        You can find my thoughts here.
        <br /><br />
        <b>And <i>pictures</i></b> of scientists!
      </p>
      */}

      <img
        className="avatar"
        src={avatarUrl}
        alt={name}
      />

      <h1>{name}'s Todos</h1>
    </>
  );
}
