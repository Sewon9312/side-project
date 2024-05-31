import React from 'react';
import styled, { css } from 'styled-components';

const Loading = ({ img }) => {

  const src = `/assets/images/etc/${img}.svg`

  return (
    <Wrap img={img} >
      <img src={src} alt='loading...' />
    </Wrap>
  );
};

export default Loading;

const Wrap = styled.div`

  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  &::before {}

  
`;



