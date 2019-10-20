import React from 'react';
import styled from 'styled-components';

const Heading = styled.h1`
  margin: 0 0 1em;
  line-height: 0.9;
  font-size: 1.125rem;
  color: #2D74D2;
`;

const Span = styled.span`
  display: block;
  color: #834db7;
`;

function Logo() {
  return (
    <Heading>
      hey
      <Span>
        cinema
      </Span>
    </Heading>
  );
}

export default Logo;
