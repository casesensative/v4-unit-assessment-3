import React, {Component} from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: '',
    }
    this.inputHandler = this.inputHandler.bind(this);
  }


  inputHandler(text) {
    this.setState({userInput: text});
}

  clear() {
    document.querySelector('.searchinput').value = ''
  }

  render() {
    return (
      <div className="searchbar">
        <input type="text" className="searchinput" onChange={e => this.inputHandler(e.target.value)}/>
        <button className="searchbutton" onClick={() => this.props.setBooksFn(this.state.userInput)}>search</button>
        <button className="searchbutton" onClick={() => {
          this.props.clearFn(); 
          this.setState({userInput: ''});
          this.clear();
        }}>clear search</button>
      </div>
    )
  }
}

export default SearchBar;
