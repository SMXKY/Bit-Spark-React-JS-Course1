// import { StudentInfo } from "./components/Lesson-1/StudentInfo";
// import { AllUserInfo } from "./components/Lesson-1/Exercises/AllUserInfo";
//import { InternInfo } from "./components/Lesson-2/InternInfo";
//import { Laptop } from "./components/Lesson-2/Laptop";
// import { BookInfo } from "./components/Lesson-3/BookInfo";
//import { Square } from "./components/Lesson-3/Square";
//import { Rectangle } from "./components/Lesson-3/Rectangle";
import { Book } from "./components/Lesson-3/BookComponent";

export function App() {
  const books = [
    {
      name: "To Kill a Mockingbird",
      author: "Harper Lee",
      ISBN: "978-0-06-093566-3",
      releaseDate: "1960-07-11",
    },
    {
      name: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      ISBN: "978-0-7432-7356-5",
      releaseDate: "1925-04-10",
    },
    {
      name: "1984",
      author: "George Orwell",
      ISBN: "978-0-451-52493-5",
      releaseDate: "1949-06-08",
    },
    {
      name: "Pride and Prejudice",
      author: "Jane Austen",
      ISBN: "978-0-14-017871-2",
      releaseDate: "1813-01-28",
    },
    {
      name: "The Catcher in the Rye",
      author: "J.D. Salinger",
      ISBN: "978-0-316-76953-3",
      releaseDate: "1951-07-16",
    },
  ];
  return (
    <>
      {books.map((el) => {
        return <Book info={el} />;
      })}
    </>
  );
}
