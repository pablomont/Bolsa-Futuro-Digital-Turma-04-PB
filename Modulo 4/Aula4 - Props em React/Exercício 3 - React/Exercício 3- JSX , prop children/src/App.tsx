import "./styles.css";

function Card({ children }) {
  return (
    <div className="card">
      <div className="card-content">{children}</div>
    </div>
  );
}

export default function Profile() {
  return (
    <div>
      <Card>
        <h1>Photo</h1>
        <img
          className="avatar"
          src="https://i.imgur.com/OKS67lhm.jpg"
          alt="Aklilu Lemma"
          width={70}
          height={70}
        />
      </Card>

      <Card>
        <h1>About</h1>
        <p>
          Aklilu Lemma foi um ilustre cientista etíope que descobriu um
          tratamento natural para a esquistossomose.
        </p>
      </Card>
    </div>
  );
}
