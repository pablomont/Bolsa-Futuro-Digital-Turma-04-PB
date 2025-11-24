import "./App.css";

function App() {
  return (
    <>
      <DrinkList/>
    </>
  )
}

let info = {
  part:'',
  caffeine: '',
  age:''
};

function Drink({name}: any) {
return ( <section>
<h1>{name}</h1>
<ul>
    <li>
        <strong>Part of plant: </strong>
        {name ==='tea' ? 'leaf': 'bean'}
    </li>
    <li>
        <strong>Caffeine content: </strong>
        {name ==='tea' ? '15-70 mg/cup': '80-185 mg/cup'}
    </li>
    <li>
        <strong>Age: </strong>
        {name === 'tea' ? '4,000+ years' : '1,000+ years'}
    </li>
</ul>
</section>
);
}

function DrinkList() {
return (
  <div>
    <Drink name="tea" />
    <Drink name="coffee" />
  </div>
);
}

export default App
