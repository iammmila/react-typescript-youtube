import "./App.css";
import Greet from "./components/Greet";
import Heading from "./components/Heading";
import Oscar from "./components/Oscar";
import Status from "./components/Status";

function App() {
  return (
    <>
      <Status status="success" />
      <Heading>Placeholder Text</Heading>
      <Oscar>
        <Heading>Oscar goes to Leonardo Dicaprio!</Heading>
      </Oscar>
      <Greet
        name="mila"
        // currentAge={99999}
      />
    </>
  );
}

export default App;
