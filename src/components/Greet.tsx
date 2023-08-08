type GreetProps = {
  name: string;
  currentAge?: number;
};
const Greet = (props: GreetProps) => {
  const { currentAge = 20 } = props;
  return (
    <>
      <h2>hello {props.name}</h2>
      <h6>your age: {currentAge}</h6>
    </>
  );
};

export default Greet;
