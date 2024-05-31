import React from 'react';
import styled from 'styled-components';

const Badge = ({ count, children }) => {
  return <CustomBadge count={count}>{children}</CustomBadge>;
};

export default Badge;

const CustomBadge = styled.button`
    position : relative;
    border-radius: 80px;
    background-color: #99a3ff;

    ::before{
      content: "${props => props.count}";
      display: block; 
      position: absolute; 
      top: -2px;
      right: -2px;
      padding: 4px 6px;
      border-radius: 80px;
      background-color: blue;
      color: #fff;
      transform: none;
      font-size: 12px;
      font-weight: 600;
      line-height: 12px;
      pointer-events: none;
    }

`;
