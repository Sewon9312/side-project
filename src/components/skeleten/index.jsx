import React from 'react';
import styled, { keyframes } from 'styled-components';

const Skeleton = ({ className, style }) => {
  return <SkeletonWrapper className={className} style={style} />;
};

export default Skeleton;

const shimmer = keyframes`
  0% {
    background-position: -468px 0;
  }
  100% {
    background-position: 468px 0; 
  }
`;

const SkeletonWrapper = styled.div`
  display: inline-block;
  height: 100%;
  width: 100%;
  background-color: #eee;
  background-image: linear-gradient(
    to right,
    #eee 0%,
    #ddd 20%,
    #eee 40%,
    #eee 100%
  );
  background-repeat: no-repeat;
  background-size: 800px 104px;
  animation: ${shimmer} 1.5s linear infinite;
  border-radius: 4px;
`;