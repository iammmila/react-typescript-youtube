type StatusProps = {
  status: "loading" | "error" | "success";
};

const Status = (props: StatusProps) => {
  let message;
  if (props.status === "loading") {
    message = "Loading..";
  } else if (props.status === "error") {
    message = "Error fetching data";
  } else if (props.status === "success") {
    message = "Data fetched sucsessfully!";
  }

  return (
    <div>
      <h2> Status - {message}</h2>
    </div>
  );
};
export default Status;
