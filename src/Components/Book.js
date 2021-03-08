import React from "react";

function Book(props) {
  function imageCheck(image) {
    try {
      return image.thumbnail;
    } catch (err) {
      return "no_cover_thumb.gif";
    }
  }

  return (
    <div className="book">
      <a href={props.link} className="bookPlaceholder" target="_blank">
        <img src={imageCheck(props.image)} alt={props.title} />
        <div className="bookInfo">
          <p className="title">{props.title}</p>
          by{" "}
          <b className="author" style={{ color: "#000" }}>
            {props.authors}
          </b>
        </div>
      </a>
    </div>
  );
}

export default Book;
