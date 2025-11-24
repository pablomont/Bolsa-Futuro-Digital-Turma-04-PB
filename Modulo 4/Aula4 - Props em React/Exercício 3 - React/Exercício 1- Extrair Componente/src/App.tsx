import "./styles.css";
import { getImageUrl } from "./utils";

function Profile({ name, imageId, profession, awards, discovery }) {
  return (
    <section className="profile">
      <h2>{name}</h2>

      <img
        className="Avatar"
        src={getImageUrl(imageId)}
        alt={name}
        width={70}
        height={70}
      />

      <ul>
        <li>
          <b>Profissão: </b>
          {profession}
        </li>

        <li>
          <b>Premio: {awards.count} </b>
          {awards.item.join(",")})
        </li>

        <li>
          <b>Descobertas</b>
          {discovery}
        </li>
      </ul>
    </section>
  );
}

export default function Gallery() {
  return (
    <div>
      <h1>Cientistas Notáveis</h1>

      <Profile
        name="Maria Skłodowska-Curie"
        imageId="szV5sdG"
        profession="fisica quimica"
        awards={{
          count: 4,
          item: [
            "Premio nobel de fisica",
            "Premio nobel de quimica",
            "Medalha Davy",
            "Medalha MAtteucci",
          ],
        }}
        discovery="polônio (elemento químico)"
      />

      <Profile
        name="Katsuko saruhashi"
        imageId="YfeOqp2"
        profession="geoquimica"
        awards={{
          count: 4,
          item: ["Premio Myake para Geoquimica", "Premio Tanaka"],
        }}
        discovery="um metodo para medir dioxido de carbono na agua do mar"
      />
    </div>
  );
}