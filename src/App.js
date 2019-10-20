import React, {Component} from 'react';
import Logo from './Logo';
import Search from './Search';
import Results from './Results';
import './App.css';

class App extends Component {
  state = {
    loading: false,
    query: '',
    results: []
  }

  handleInput = e => {
    const val = e.target.value;
    this.setInputValue(val);
    this.searchOMDb(val);
  }

  searchOMDb = query => {
    if (query.length) {
      const omdbAPI = 'http://www.omdbapi.com/';
      const paramApiKey = '&apikey=cd7a171a';

      this.setState({loading: true});

      fetch(`${omdbAPI}?s=${query}${paramApiKey}`)
        .then(resp => resp.json())
        .then(resp => {
          Promise.all(resp.Search.map(item => {
            const {imdbID} = item;

            return fetch(`${omdbAPI}?i=${imdbID}${paramApiKey}`)
              .then(r => r.json())
          })).then(results => {
            this.setState({loading: false, results});
          });
        })
        .catch(error => {
          console.log({error});
        });
    } else {
      this.setState({results: []});
    }
  }

  setInputValue = query => {
    this.setState({query});
  }

  render() {
    return (
      <div className="App">
        <Logo/>

        <Search
          label="Search hey cinema listings"
          value={this.state.query}
          onChange={this.handleInput}
        />

        <Results query={this.state.query} results={this.state.results} loading={this.state.loading}/>
      </div>
    );
  }
}

export default App;
