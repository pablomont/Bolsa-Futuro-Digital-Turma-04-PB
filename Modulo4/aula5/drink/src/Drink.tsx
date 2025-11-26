function Drink({ name }: any) {
  let plantPart, caffeine, age;

  if (name === 'tea') {
    plantPart = 'leaf';
    caffeine = '15–70 mg/cup';
    age = '4,000+ years';
  } else {
    plantPart = 'bean';
    caffeine = '80–185 mg/cup';
    age = '1,000+ years';
  }

  return (
    <section>
      <h1>{name}</h1>
      <ul>
        <li>
          <strong>Part of plant: </strong>
          {plantPart}
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
