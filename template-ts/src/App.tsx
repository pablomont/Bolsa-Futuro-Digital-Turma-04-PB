import * as React from 'react';

function MyButton({ title, disabled }: any) {
  return (
    <button disabled={disabled}>{title}</button>
  );
}

export default function MyApp() {
  return (
    <div>
      <h1>Bem-vindo ao my app</h1>
      <MyButton title="Eu sou um botão desabilitado" disabled={true} />
    </div>
  );
}
