const Copy = () => {
  const copyHandler = () => {
    console.log(`Don't copy code`);
  };

  return (
    <p onCopy={copyHandler}>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem quam
      ea delectus molestias rerum voluptatibus blanditiis est expedita.
      Mollitia, fuga.
    </p>
  );
};

export default Copy;
