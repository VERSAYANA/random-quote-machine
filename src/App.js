import React, { Component } from 'react';
import Quote from './Quote';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      author: '',
      quote: '',
      fetching: false,
    };
    this.fetchData = this.fetchData.bind(this);
  }
  componentDidMount() {
    this.fetchData();
  }
  fetchData() {
    const url = 'https://thesimpsonsquoteapi.glitch.me/quotes';
    this.setState({
      ...this.state,
      fetching: true
    })
    fetch(url)
      .then(res => res.json())
      .then(data => {
        this.setState({
          author: data[0].character,
          quote: data[0].quote,
          fetching: false
        })
      })
  }

  render() {
    return (
      <div className="App">
        {this.state.quote ?
          <Quote fetching={this.state.fetching} text={this.state.quote} author={this.state.author} next={this.fetchData} />
          : null
        }
      </div>
    );
  }
}

export default App;
