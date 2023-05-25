import React from "react";
import "./SingleBook.css";
import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBContainer,
  MDBIcon,
} from "mdb-react-ui-kit";
const SingleBook = ({ singleBook, setShowPop }) => {
  const { title, authors, description, image_url } = singleBook;
  return (
    <MDBContainer fluid>
      <MDBIcon
        fas
        icon="times-circle"
        className="fs-2 close"
        onClick={() => setShowPop(false)}
      />
      <MDBCard className="single-card">
        <MDBCardImage src={image_url} alt={authors} fluid />
        <MDBCardBody className="text-start">
          title: <strong>{title}</strong>
          <p>Author: {authors}</p>
          <p>Description: {description.slice(0, 400)}...</p>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
};

export default SingleBook;
