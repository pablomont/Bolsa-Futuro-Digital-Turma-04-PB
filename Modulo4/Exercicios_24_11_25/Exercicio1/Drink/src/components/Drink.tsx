function Drink({ name }: any) {

    let PartOfPlant: string;
    let CaffeineContent: string;
    let Age: string;

    if(name == 'tea'){
        PartOfPlant = 'leaf';
        CaffeineContent = '15–70 mg/cup';
        Age = '4,000+ years'
    }
    else{
        PartOfPlant = 'bean';
        CaffeineContent = '80–185 mg/cup';
        Age = '1,000+ years'
    }


  return (
    <section>
      <h1>{name}</h1>
      <ul>
        <li>
          <strong>Part of plant: {PartOfPlant}</strong>
        </li>
        <li>
          <strong>Caffeine content: {CaffeineContent}</strong>
        </li>
        <li>
          <strong>Age: {Age}</strong>
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