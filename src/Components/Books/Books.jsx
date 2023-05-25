import {
  MDBCard,
  MDBCardFooter,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBRow,
} from "mdb-react-ui-kit";
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Books.css";
import SingleBook from "../SingleBook/SingleBook";
const Books = () => {
  const [books, setBooks] = useState([]);
  const [singleBook, setSingleBook] = useState({});
  const [showPop, setShowPop] = useState(false);
  const [page, setPage] = useState(1);
  // fetching books from api
  const GetBooks = async () => {
    const response = await axios.get(
      "https://example-data.draftbit.com/books?_limit=100"
    );
    setBooks(response.data);
  };

  useEffect(() => {
    GetBooks();
  }, []);

  // handlePopUp
  const handlePopUp = (id) => {
    const singleBook = books.find((elem) => {
      return elem.id === id;
    });
    setSingleBook(singleBook);
  };
  // handle page

  const handlePage = (selectedpage) => {
    if (
      selectedpage >= 1 &&
      selectedpage <= books.length / 10 &&
      selectedpage !== page
    )
      setPage(selectedpage);
  };
  return (
    <section>
      <h2>Books</h2>
      <MDBContainer fluid className="book-container">
        <MDBRow className="my-5 px-2 align-items-center g-4">
          {books?.slice(page * 10 - 10, page * 10).map((book) => {
            return (
              <MDBCol size="12" md="4" key={book.id} className="book">
                <MDBCard
                  onClick={() => {
                    handlePopUp(book.id), setShowPop(true);
                  }}
                >
                  <MDBCardImage src={book?.image_url} alt={book?.title} fluid />
                  <MDBCardFooter className="text-start">
                    Title: <strong>{book?.title}</strong>
                    <p>Author: {book?.authors}</p>
                    <p>Desc: {book?.description.slice(0, 70)}...</p>
                  </MDBCardFooter>
                </MDBCard>
              </MDBCol>
            );
          })}
        </MDBRow>
        {/* single book popup */}
        {showPop && (
          <section className="singlebook">
            <SingleBook singleBook={singleBook} setShowPop={setShowPop} />
          </section>
        )}

        {/* pagination */}
        {books.length > 0 && (
          <section className="pagination d-flex justify-content-center gap-4 mt-4">
            <MDBIcon
              fas
              icon="caret-square-left"
              className={page > 1 ? "left" : "disable"}
              onClick={() => setPage(page - 1)}
            />
            {[...Array(books.length / 10)].map((_, i) => {
              return (
                <span
                  className={page === i + 1 ? "selected" : "page-number"}
                  key={i}
                  onClick={() => handlePage(i + 1)}
                >
                  {i + 1}
                </span>
              );
            })}
            <MDBIcon
              fas
              icon="caret-square-right"
              className={page < books.length / 10 ? "right" : "disable"}
              onClick={() => setPage(page + 1)}
            />
          </section>
        )}
      </MDBContainer>
    </section>
  );
};

export default Books;
