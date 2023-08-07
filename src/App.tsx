import "./App.css";
import Greet from "./components/Greet";
import Person from "./components/Person";
import PersonList from "./components/PersonList";

function App() {
  const personName = { firstName: "Malaxat", lastName: "Iibrahimova" };
  const nameList = [
    { first: "birinci", last: "ikinci" },
    { first: "ucuncu", last: "dorduncu" },
    { first: "besinci", last: "altinci" },
  ];
  return (
    <>
      <Greet name="malahat" currentAge={999} />
      <Person name={personName} />
      <PersonList names={nameList} />
    </>
  );
}

export default App;
