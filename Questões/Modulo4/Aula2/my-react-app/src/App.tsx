import "./App.css";

export default function App() {
  return (
    <>
      <Galery />
    </>
  );
}

function Galery() {
  return (
    <div>
      <h1> Pessoas importantes na ciência da computação </h1>
      <Profile />
      <Profile />
      <Profile />
    </div>
  );
}

function Profile() {
  return (
    <img
      src="https://s1.static.brasilescola.uol.com.br/img/2019/09/alan-turing-be.jpg"
      width={400}
      height={320}
      alt="turing"
    />
  );
}
