function Drink({ name }:any) {
        let partofPlant, caffeineContent, age;
      
      if(name==="tea"){
        partofPlant="leaf";
        caffeineContent="15-70mg/cup";
        age="4,000+years";
      }else{
        partofPlant="bean";
        caffeineContent='80-185mg/cup';
        age="1,000 years";
      }
      return(
        <>
          <section>
            <h1>{name}</h1>
              <ul>
                <li>
                  <strong>Part of plant: </strong>{partofPlant}
                </li>
                <li>
                  <strong>Caffeine content:</strong>{caffeineContent}
                </li>
                <li>
                  <strong>Age:</strong>{age}
                </li>
              </ul>
          </section>
        </>
      )
}

export default function DrinkList() {
  return (
    <div>
      <Drink name="tea" />
      <Drink name="coffee" />
    </div>
  );
}