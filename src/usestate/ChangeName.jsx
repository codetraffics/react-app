import { useState } from "react";

const ChangeName = () => {
  const [username, setUsername] = useState("Unknown");

  const nameHandler = () => {
    setUsername("@codetraffics");
  };

  return (
    <div>
      <h1>{username}</h1>
      <button onClick={nameHandler}>Change Name</button>
    </div>
  );
};

export default ChangeName;
