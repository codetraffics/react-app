const Book = ({ img, title, authors, isAudiobook, year, children }) => {
  return (
    <div>
      <img src={img} alt={title} />
      <h1>Title: {title}</h1>
      <p>Author: {authors}</p>
      <p>Audiobook: {isAudiobook}</p>
      <p>Year: {year}</p>
      {children}
    </div>
  );
};

export default Book;
