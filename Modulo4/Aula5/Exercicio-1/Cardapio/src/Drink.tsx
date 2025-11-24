function Drink({ name }: any) {
  let partOfPlant: string;
  let caffeineContent: string;
  let age: string;

  if (name === 'tea') {
    partOfPlant = 'leaf';
    caffeineContent = '15–70 mg/cup';
    age = '4,000+ years';
  } else if (name === 'coffee') {
    partOfPlant = 'bean';
    caffeineContent = '80–185 mg/cup';
    age = '1,000+ years';
  } else {
    partOfPlant = 'unknown';
    caffeineContent = 'unknown';
    age = 'unknown';
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
          {caffeineContent}
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
