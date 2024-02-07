const Button = () => {
  const handleClick = () => {
    console.log("Hi, you clicked me");
  };

  const clickHandler = (a, b) => {
    console.log(a * b);
  };

  return (
    <>
      <button onClick={handleClick}>Click1</button>
      <button onClick={() => clickHandler(3, 4)}>Click2</button>
    </>
  );
};

export default Button;
