import Avatar from "./avatar";
import Card from "./card";

export default function Profile() {
  return (
    <>
    <Card>
      <Avatar
      person={{
        name: "Albert Einsten",
        imageId: "4yH6xnp",
      }}
    />
    </Card>
    <Card> 
      <Avatar
      person={{
        name: "Shinji",
        imageId: "XrolOn1",
      }}
    />
    </Card>
    
    </>
  );
}
