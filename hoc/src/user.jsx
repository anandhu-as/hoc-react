import React from "react";
const User = () => {
  const user = {
    name: "anandhu",
    email: "anandhuas01012@gmail.com",
  };
  return (
    <div>
      <h1>name: {user.name}</h1>
      <h1>email: {user.email}</h1>
    </div>
  );
};

export default User;
