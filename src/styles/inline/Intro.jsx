const Intro = () => {
  const addedStyles = {
    color: "blue",
    fonstStyle: "italic",
    fontWeight: "bold",
  };
  return (
    <>
      <h1 style={{ color: "black", backgroundColor: "#ccc" }}>
        Hello everyone, my name is Elvis 😎
      </h1>
      <p>
        I am populary known as
        <span
          style={{
            color: addedStyles.color,
            fontStyle: addedStyles.fonstStyle,
            fontWeight: addedStyles.fontWeight,
          }}
        >
          codetraffics
        </span>
        👨‍💻
      </p>
    </>
  );
};

export default Intro;
