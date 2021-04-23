import React, {Component} from 'react';
import './reset.css';
import './App.css';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import BookList from './components/BookList';
import Shelf from './components/Shelf';
import books from './data';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: books,
      shelf: [],
    }
    this.setBooks = this.setBooks.bind(this);
    this.filterBooks = this.filterBooks.bind(this);
  }

  filterBooks(bookObj, input) {
    if (bookObj.title.includes(input) || bookObj.author.includes(input)) {
      return bookObj;
  }
  
  }

  setBooks(userInput) {
    let filtered = this.state.books.filter((book) => {
      return this.filterBooks(book, userInput);
    });
    this.setState({books: filtered});
  }

  render() {
    return (
      <div className="main">
        <Header />
        <SearchBar books={this.state.books} setBooksFn={this.setBooks}/>
        <div className="content">
        <BookList books={this.state.books}/>
        <Shelf />
        </div>
      </div>
    )
  }
}

export default App;
