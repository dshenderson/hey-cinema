import React, {Component} from 'react';
import styled from 'styled-components';
import Logo from './Logo';
import Search from './Search';
import Results from './Results';

const AppWrapper = styled.main`
  padding: 1rem;
`;

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
            this.setState({results});
          });
        })
        .catch(error => {
          console.log({error});
        })
        .finally(() => {
          this.setState({loading: false});
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
      <AppWrapper>
        <Logo/>

        <Search
          label="Search hey cinema listings"
          value={this.state.query}
          onChange={this.handleInput}
        />

        <Results query={this.state.query} results={this.state.results} loading={this.state.loading}/>
      </AppWrapper>
    );
  }
}

export default App;
