import React from 'react';
import styled from 'styled-components';
import DebounceInput from 'react-debounce-input';
import PropTypes from 'prop-types';

const SearchWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const Icon = styled.span`
  width: 0;
  &:before {
    display: block;
    content: ' ';
    width: 20px;
    height: 20px;
    background-image: url('data:image/svg+xml; base64, PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdib3g9IjAgMCAxMCAxMCI+CiAgPHBhdGggZD0iTTE1LjUgMTRoLS43OWwtLjI4LS4yN0MxNS40MSAxMi41OSAxNiAxMS4xMSAxNiA5LjUgMTYgNS45MSAxMy4wOSAzIDkuNSAzUzMgNS45MSAzIDkuNSA1LjkxIDE2IDkuNSAxNmMxLjYxIDAgMy4wOS0uNTkgNC4yMy0xLjU3bC4yNy4yOHYuNzlsNSA0Ljk5TDIwLjQ5IDE5bC00Ljk5LTV6bS02IDBDNy4wMSAxNCA1IDExLjk5IDUgOS41UzcuMDEgNSA5LjUgNSAxNCA3LjAxIDE0IDkuNSAxMS45OSAxNCA5LjUgMTR6IiBmaWxsPSJyZ2IoNDUsIDE0MywgMjEwKSI+PC9wYXRoPgo8L3N2Zz4=');
    background-repeat: no-repeat;
    position: relative;
    left: -29px;
    top: 10px;
  }
`;

const Input = styled.input`
  padding: 10px 25px 10px 10px;
  border: 1px solid #f7f7f7;
  border-radius: 5px;
  box-shadow: 1px 2px 5px #ccc;
  flex: 1;
  max-width: 414px;
  font-size: 1.125rem;
  font-style: italic;
`;

function Search({
  label = 'Search',
  placeholder = 'Search',
  onChange,
  value
}) {
  return (
    <SearchWrapper>
      <DebounceInput
        element={Input}
        aria-label={label}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        debounceTimeout={500}
      />
      <Icon/>
    </SearchWrapper>
  );
}

Search.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired
}

export default Search;
