import React from 'react';
import styled, { css } from 'styled-components';

const Button = ({ type, variant, size, disabled, onClick, startIcon, endIcon, children }) => {

  return (
    <CustomButton
      type={type || 'button'}
      className={'btn'}
      onClick={onClick}
      disabled={!!disabled}
      $variant={variant || 'primary'}
      $size={size || 'sm'}
    >
      {startIcon && <span className='icon-wrap start'>{startIcon}</span>}
      {children}
      {endIcon && <span className='icon-wrap end'>{endIcon}</span>}
    </CustomButton>
  );
};

export default Button;

const CustomButton = styled.button`
 
 display: flex;
 align-items: center;
 justify-content: center;
 padding: 2px 8px;
 border: solid black;
 color : black;
 font-size: 12px;

 
 &:disabled {
      cursor: unset;
    }


 // !! variant
 ${(props) =>
    props.$variant === 'primary' &&
    css`
    `}

  ${(props) =>
    props.$variant === 'secondary' &&
    css`
    `}

  ${(props) =>
    props.$variant === 'outlined' &&
    css`
    `}

  // !! size 
    ${(props) =>
    props.$size === 'md' &&
    css`

    `}
  ${(props) =>
    props.$size === 'lg' &&
    css`

    `}
 
`;
