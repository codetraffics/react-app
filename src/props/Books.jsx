import Book from "./Book";

const Books = () => {
  return (
    <>
      <Book
        img="https://m.media-amazon.com/images/I/81uDiLTczbL._AC_UY218_.jpg"
        title="The 4-Hour Workweek: Escape 9-5, Live Anywhere, and Join the New Rich (Expanded and Updated)"
        authors={["Tim Ferris", "Ray Porter"]}
        isAudiobook="Yes"
        year={2009}
      >
        <p>
          Forget the old concepts of retirement and a deferred life plan. There
          is no need to wait and every reason not to, especially in
          unpredictable economic times. For living more and working less, this
          book is the blueprint.
        </p>
      </Book>
    </>
  );
};

export default Books;
