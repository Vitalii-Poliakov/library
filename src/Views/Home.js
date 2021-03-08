import React, { useState } from "react";
import axios from "axios";
import Book from "../Components/Book";
function Home() {
  //Scrolls tp the top of the page
  window.scrollTo(0, 0);

  const key = "AIzaSyB76xdQCyoeQV2bqh56AcxhYF_HS_vAUt4";

  const [book, setBook] = useState("");
  const [result, setResult] = useState([]);
  const [barState, moveSearchBar] = useState(false);

  function handleChange(event) {
    const book = event.target.value;
    setBook(book);
  }

  let api_link =
    "https://www.googleapis.com/books/v1/volumes?q=" +
    book +
    "&key=" +
    key +
    "&maxResults=40";

  function handleSubmit(event) {
    event.preventDefault();
    axios.get(api_link).then((data) => {
      setResult(data.data.items);
    });
  }

  if (barState) {
    // document.getElementsByClassName("book-search")[0].style.paddingTop = "48px";
    // document.getElementsByClassName("book-search")[0].style.paddingBottom =
    //   "48px";
    // document.getElementsByClassName("form-placeholer")[0].style.marginBottom =
    //   "25px";
  }

  function setTitleLength(source) {
    let title = source.split(" ");
    let new_title = source;
    let max_length = 7;
    if (title.length > max_length) {
      new_title = title[0];
      for (var i = 0; i < max_length; i++) {
        new_title += " " + title[i];
      }
      new_title += "...";
    }
    return new_title;
  }

  return (
    <div className="book-search">
      <div className="form-placeholer">
        <form onSubmit={handleSubmit}>
          <input
            className="search-bar"
            onChange={handleChange}
            type="text"
            placeholder="Search for google books"
            autoComplete="off"
          />
          <button
            className="search-button"
            type="submit"
            onClick={() => moveSearchBar(!barState)}
          >
            <i class="fa fa-search"></i>
          </button>
        </form>
      </div>
      <div className="grid-container">
        {result.map((book) => (
          <Book
            link={book.volumeInfo.previewLink}
            image={book.volumeInfo.imageLinks}
            title={setTitleLength(book.volumeInfo.title)}
            authors={book.volumeInfo.authors}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
