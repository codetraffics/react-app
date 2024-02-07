const Move = () => {
  const moveHandler = () => {
    alert("Smooth movement");
  };

  return (
    <p onMouseMove={moveHandler}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis quam
      asperiores in accusantium harum consequatur eos nemo accusamus, eveniet
      consectetur?
    </p>
  );
};

export default Move;
