import React from "react";
import Loader from "./Loader";

import User from "./user";
const Userloader = Loader(User);
const App = () => {
  {
    /* A function that takes a component as argument and return new component with additional features */
  }
  return <Userloader />;
};

export default App;
