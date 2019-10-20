import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import Img from 'react-image';
import noimage from './noimage.png';
import VisibilitySensor from 'react-visibility-sensor';
import Loader from 'react-loader-spinner';
import PropTypes from 'prop-types';

const Card = styled.li`
  flex: 414px;
  max-width: 414px;
  height: 10rem;
  position: relative;
  margin: 1rem 0 0;
  padding: 1rem;
  border: 1px solid #f7f7f7;
  border-radius: 5px;
  box-shadow: 1px 2px 5px #ccc;
  overflow: hidden;
`;

const Title = styled.h2`
  margin: 0 0 0 calc(40% + 1rem);
  font-size: 1.125rem;
  color: #2D74D2;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const Image = styled(Img)`
  position: absolute;
  left: 0;
  top: 0;
  width: 40%;
  height: 100%;
  clip-path: polygon(0 0, 100% 0, 85% 100%, 0 100%);
  background-size:cover;
`;

const Details = styled.dl`
  margin: 1rem 0 0 calc(40% + 1rem);
  font-size: 1rem;
  color: #666;
`;

const DetailCategory = styled.dt`
  float: left;
  clear: left;
  &:after {
    content: ':';
    margin-right: 0.5rem;
  }
`;

const Detail = styled.dd`
  float: left;
  margin: 0;
`;

const Callout = styled(Link)`
  font-size: 1.125rem;
  font-weight: normal;
  color: #834db7;
  text-decoration: none;
  position: absolute;
  left: calc(40% + 1rem);
  bottom: 1rem;
  &:hover,
  &:active {
    color: #34283f;
  }
`;

const Result = ({result: {Rated: rating, Title: title, Year: year, Poster: url}, callout}) => {
  if (!url) {
    console.log('no url!');
  }
  return (
    <Card>
      <Title>{title}</Title>

      <VisibilitySensor>
        <Image
          src={[url, noimage]}
          loader={<Loader type="Grid" color="#834db7"/>}
          alt=''
          aria-hidden="true"
        />
      </VisibilitySensor>

      <Details>
        <DetailCategory>Rating</DetailCategory>
        <Detail>{rating}</Detail>
        <DetailCategory>Released</DetailCategory>
        <Detail>{year}</Detail>
      </Details>

      {!!callout && (
        // There is no CTA in this exercise, but I am making this extensible, since the design shows a CTA.
        <Callout to={callout.link}>{callout.text}</Callout>
      )}
    </Card>
  );
};

Result.propTypes = {
  result: PropTypes.object.isRequired,
  callout: PropTypes.object
};

export default Result;
