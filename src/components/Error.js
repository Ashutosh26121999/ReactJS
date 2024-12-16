import React from "react";
import {useRouteError} from "react-router-dom";

export default function Error() {
  const error = useRouteError();
  console.log("Error", error);
  return (
    <div>
      <h1>Error Page:{error.status}</h1>
      <h2>Opps ! Something went wrong</h2>
      <h4>{error.statusText || error.message}</h4>
    </div>
  );
}
