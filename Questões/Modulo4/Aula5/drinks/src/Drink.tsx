function Drink({ name }: any) {
    let partOfPlant;
    let caffeine;
    let age;

    if (name === 'tea'){
        partOfPlant = 'leaf'
        caffeine = "15-70mg/cup"
        age = "4.000+ years"
    } 
    else {
        partOfPlant = 'bean'
        caffeine = "80-185mg/cup"
        age = "1.000+ years" 
    }

    return (
      <section>
        <h1>{name}</h1>
        <ul>
          <li>
            <strong>Part of plant: </strong>
            {partOfPlant}
          </li>
          <li>
            <strong>Caffeine content: </strong>
            {caffeine}
          </li>
          <li>
            <strong>Age: </strong>
            {age}
          </li>
        </ul>
      </section>
    );
  }
  
  export default function DrinkList() {
    return (
      <div>
        <Drink name="tea" />
        <Drink name="coffee" />
      </div>
    );
  }