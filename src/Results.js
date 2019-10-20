import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Loader from 'react-loader-spinner';
import Result from './Result';

const LoaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 3rem;
`;

const List = styled.ul`
  list-style: none;
  display: flex;
  padding: 0;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const NoResults = styled.p`
  font-size: 1.125rem;
  margin-top: 1rem;
  color: #834db7;
`;

const Results = ({loading, query, results}) => {
  if (loading) {
    return (
      <LoaderWrapper>
        <Loader type="Grid" color="#834db7" width={150} height={150}/>
      </LoaderWrapper>
    );
  }
  if (query) {
    return results.length ? (
      <List>
        {results.map(result => (
          <Result key={result.imdbID} result={result}/>
        ))}
      </List>
    ) : (
      <NoResults>No results found!</NoResults>
    );
  }

  return null;
}

Results.propTypes = {
  query: PropTypes.string.isRequired,
  results: PropTypes.array.isRequired
}

export default Results;
