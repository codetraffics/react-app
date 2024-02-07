const ValidPassword = () => <h1>Valid Password</h1>;
const InvalidPassword = () => <h1>Invalid Password</h1>;

const PasswordChecker = ({ isValid }) => {
  //   if (isValid) {
  //     return <ValidPassword />;
  //   }
  //   return <InvalidPassword />;

  return isValid ? <ValidPassword /> : <InvalidPassword />;
};

const Password = () => {
  return (
    <>
      <PasswordChecker isValid={false} />
    </>
  );
};

export default Password;
