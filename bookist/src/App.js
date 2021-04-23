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
    this.clearSearch = this.clearSearch.bind(this);
    this.addToShelf = this.addToShelf.bind(this);
    this.clearShelf = this.clearShelf.bind(this);
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
    console.log(filtered);
    this.setState({books: filtered});
  }

  clearSearch() {
    this.setState({books: books})
  }

  addToShelf(book) {
    let shelfCopy = [...this.state.shelf]
    shelfCopy.push(book);
    this.setState({shelf: shelfCopy});
  }

  clearShelf() {
    this.setState({shelf: []})
  }


  render() {
    console.log(this.state.shelf);
    return (
      <div className="main">
        <Header />
        <SearchBar books={this.state.books} setBooksFn={this.setBooks}
        clearFn={this.clearSearch}/>
        <div className="content">
        <BookList books={this.state.books} addToShelfFn={this.addToShelf}/>
        <Shelf shelf={this.state.shelf} clearShelfFn={this.clearShelf}/>
        </div>
      </div>
    )
  }
}

export default App;
