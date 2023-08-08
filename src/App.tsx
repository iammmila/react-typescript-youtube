import "./App.css";
import Button from "./components/Button";
import Input from "./components/Input";
// import Greet from "./components/Greet";
// import Heading from "./components/Heading";
// import Oscar from "./components/Oscar";
// import Status from "./components/Status";

function App() {
  
  return (
    <>
      <Button handleClick={(event, id) => console.log("clicked", event, id)} />
      <Input
        value=""
        handleChange={(event) => console.log(event.target.value)}
      />
    </>
  );
}

export default App;
