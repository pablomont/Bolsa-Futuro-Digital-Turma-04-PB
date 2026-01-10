interface myButtonProps{
  title:string
  disabled: boolean
}
function MyButton({title, disabled}: myButtonProps) {
  return (
    <button disabled={disabled}>{title}</button>
  );
}

export default function MyApp() {
  return (
    <div>
      <h1>Bem-vindo ao my app</h1>
      <MyButton title="Eu sou um botão" disabled={false}/>
    </div>
  );
}