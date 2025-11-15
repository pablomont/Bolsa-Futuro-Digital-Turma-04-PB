import "./App.css";

export default function App() {
  return (
    <>
      <Gallery />
    </>
  );
}

function Gallery() {
  return (
    <div>
      <h1>Cientistas incríveis</h1>
      <Profile />
      <Profile />
      <Profile />
    </div>
  );
}

function Profile() {
  return (
    <img
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeK76ON20FIbTr9u4z9xIJBCxjNr_2xswX-oWSAkiFbFCBHrN15jj_6oCsDVDiyUdN5PSFPln76JXdpgTkZp0WlL-ODuCbIRv3i2lFEK87AA&s=10"
      alt=""
      width="20%"
    />
  );
}
