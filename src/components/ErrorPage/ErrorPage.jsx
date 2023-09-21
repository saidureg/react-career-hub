import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);
  return (
    <div className="flex flex-col items-center mt-32 space-y-2 text-2xl font-semibold">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <Link to={"/"}>
        <button className="btn btn-primary mt-3">Go back to Home</button>
      </Link>
    </div>
  );
};

export default ErrorPage;
