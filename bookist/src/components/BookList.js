import React from 'react';

const BookList = function(props) {
  
  let booksdisplay = props.books.map((book) => {
    return <div className="thumbnail" key={book.id}>
      <img className="thumbpic" src={book.img} alt="{book.title}" 
      onClick={() => props.addToShelfFn(book.title)}
      />
      <p className="bookinfo">{book.title} by {book.author}</p>
      </div>
  });

  return (
    <div className="booklist">
      {booksdisplay}
    </div>
  )
}

export default BookList;