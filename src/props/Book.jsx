const Book = (props) => {
  return (
    <div>
      <img src={props.img} alt={props.name} />
      <h1>Title: {props.title}</h1>
      <p>Author: {props.author}</p>
      <p>Audiobook: {props.isAudiobook}</p>
    </div>
  );
};

export default Book;
