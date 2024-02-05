const Bio = () => {
  const myName = "codetraffics";
  const intro = () =>
    `${myName} is an entry level software engineer from Ghana`;
  const specialClass = "simple-class";
  const addNum = (a, b) => a + b;

  return (
    <>
      <h1>{myName}</h1>
      <p>{intro()}</p>
      <p>
        Technologies I use:
        {["React", "Next JS", "Node JS", "Express JS", "MongoDB"]}
      </p>
      <p>2 * 3 = {2 * 3}</p>
      <p>2 + 2 = {addNum(2, 2)}</p>
      <p className={specialClass}>This is a special class</p>
    </>
  );
};

export default Bio;
