import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      author: '',
      quote: ''
    };
    this.fetchData = this.fetchData.bind(this);
  }
  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    const url = 'https://thesimpsonsquoteapi.glitch.me/quotes'
    fetch(url)
      .then(res => res.json())
      .then(data => {
        this.setState({
          author: data[0].character,
          quote: data[0].quote
        })
      })
  }
  render() {
    return (
      <div className="App">
        <h2>{this.state.author}</h2>
        <p>{this.state.quote}</p>
        <button onClick={this.fetchData}>Next</button>
      </div>
    );
  }
}

export default App;
