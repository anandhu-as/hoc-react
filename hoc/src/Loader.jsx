import React, { useState } from "react";

const Loader = (UpdatedComponent) => {
  return (props) => {
    const [loading, setLoading] = useState(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
    return (
      <div>
        {loading ? <h1>loading...</h1> : <UpdatedComponent {...props} />}
      </div>
    );
  };
};

export default Loader;
