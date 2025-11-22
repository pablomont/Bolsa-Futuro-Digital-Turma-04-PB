import './App.css'

function App() {
  return (
    <>
      <Gallary /> 
    </>
  );
}

function Gallary() {
  return (
    <>
      <h1>Cientistas incríveis</h1>
      <div className='gallary'>
      <Profile />
      <Profile />
      <Profile />
    </div>
  </>
  );
}

function Profile() {
  return (
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Tesla_circa_1890.jpeg/895px-Tesla_circa_1890.jpeg"
      alt=""
    />
  );
}

export default App;
