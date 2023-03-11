import React from "react";
import { useRouteError } from "react-router-dom";

const Errorpage = () => {
  const error = useRouteError();
  console.log(error);

  return (
    <div
      id="error-page"
      className="flex flex-col justify-center items-center h-full"
    >
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occured.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
};

export default Errorpage;
