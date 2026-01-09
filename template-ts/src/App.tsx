function MyButton({title}: any) {
  return (
    <button>{title}</button>
  );
}

export default function MyApp() {
  return (
    <div>
      <h1>Bem-vindo ao my app</h1>
      <MyButton title="Eu sou um botão" />
    </div>
  );
}