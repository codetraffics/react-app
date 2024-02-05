const Expressions = () => {
  const myName = "codetraffics";
  const intro = () => `${myName} is a software engineer from Ghana`;
  const specialClass = "simple-class";
  const multiply = (a, b) => a * b;

  return (
    <>
      <h1>Hello, I'm {myName}</h1>
      <p>{intro()}</p>
      <p>Work experience: {multiply(3, 2)} months</p>
      <p>Javascript expression: 2 + 2 = {2 + 2}</p>
      <p className={specialClass}>
        I am a developer associate in elementary schools in Ghana
      </p>
    </>
  );
};

export default Expressions;
