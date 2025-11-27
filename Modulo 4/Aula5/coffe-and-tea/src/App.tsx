import "./App.css";

function DrinkList() {
return (
  <div>
    <Drink name="tea" />
    <Drink name="coffee" />
  </div>
);
}

function App() {
  return (
    <>
      <DrinkList/>
    </>
  )
}

function Drink({name}: any) {

let info = {
  part:'',
  caffeine: '',
  age:''
};

if (name == "tea") {
  info = {
    part: "leaf",
    caffeine:"15-70 mg/cup",
    age:"4,000 years"
  };

}else {
   info = {
    part: "bean",
    caffeine: "80-185 mg/cup",
    age: "1,000 years"
    };
  }

return ( 
<section>
<h1>{name}</h1>
<ul>
    <li>
        <strong>Part of plant: </strong>
        {info.part}
    </li>
    <li>
        <strong>Caffeine content: </strong>
        {info.caffeine}
    </li>
    <li>
        <strong>Age: </strong>
        {info.age}
    </li>
</ul>
</section>
);
}

export default App;
