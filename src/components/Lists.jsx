const Lists = () => {
  // Example #1
  //   const numbers = [1, 2, 3, 4, 5];

  // Example #2
  const userData = [
    {
      firstName: "Alfred",
      lastName: "Okyere",
      email: "okfred@gmail.com",
      city: "Tema",
    },
    {
      firstName: "Eric",
      lastName: "Addo",
      email: "eaddo@gmail.com",
      city: "Santasi",
    },
    {
      firstName: "Aikins",
      lastName: "Adjei",
      email: "aadjei@gmail.com",
      city: "Patasi",
    },
  ];

  return (
    <>
      {/* Example #1 */}
      {/* {numbers.map((number) => (
        <ul key={Math.random() * 10}>
          <li>{number}</li>
        </ul>
      ))} */}

      {/* Example #2 */}
      {userData.map((user) => (
        <ul>
          <li>
            {user.firstName} {user.lastName}
          </li>
          <li>{user.email}</li>
          <li>{user.city}</li>
        </ul>
      ))}
    </>
  );
};

export default Lists;
