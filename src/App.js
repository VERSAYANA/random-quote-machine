import React, { Component } from 'react';
import { get } from 'axios';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quoteDate: ''
    };
  }
  componentDidMount() {
    const url = 'http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&_jsonp=mycallback';
    get(url)
      .then(res => {
        this.setState({
          quoteDate: res.data
        })
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
  }
  render() {
    // const author = /"title":(".*")/.exec(this.state.quoteDate);
    // const author = this.state.quoteDate.match();
    console.log(author);

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
