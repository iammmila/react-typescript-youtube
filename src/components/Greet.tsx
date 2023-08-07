type GreetProps = {
  name: string;
  currentAge: number;
};
const Greet = (props: GreetProps) => {
  return (
    <>
      <h2>hello {props.name}</h2>
      <h6>your age: {props.currentAge}</h6>
    </>
  );
};

export default Greet;
