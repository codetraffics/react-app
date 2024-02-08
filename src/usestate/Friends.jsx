import { useState } from "react";

const Friends = () => {
  const [friends, setFriends] = useState(["Odelia", "Gyimah"]);

  const addHandler = () => {
    setFriends([...friends, "Papa"]);
  };

  const removeHandler = () => {
    setFriends(friends.filter((f) => f !== "Gyimah"));
  };

  const updateHandler = () => {
    setFriends(friends.map((f) => (f === "Odelia" ? "Odeliah Gyimah" : f)));
  };

  return (
    <div>
      {friends.map((friend) => (
        <li key={Math.random()}>{friend}</li>
      ))}

      <button onClick={addHandler}>Add friend</button>
      <button onClick={removeHandler}>Remove friend</button>
      <button onClick={updateHandler}>Update friend</button>
    </div>
  );
};

export default Friends;
