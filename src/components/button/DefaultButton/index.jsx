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
 font-size: 12px;
 cursor: pointer;



 
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

  ${(props) =>
    props.$variant === 'kakao' &&
    css`
      background-color: #FAE100;
      font-weight: 500;
      font-size: 16px;
      line-height: 18px;
      color: #381E1F;
      border: unset;
      border-radius: 8px;
      /* font: 500 16px #381E1F; */
    `}
    ${(props) =>
    props.$variant === 'naver' &&
    css`
      background-color: #20CB02;
      font-weight: 500;
      font-size: 16px;
      line-height: 18px;
      color: #fff;
      border: unset;
      border-radius: 8px;
    `}

    ${(props) =>
    props.$variant === 'google' &&
    css`
      background-color: #fff;
      border: 1px solid #DBDBDB;
      font-weight: 500;
      font-size: 16px;
      line-height: 18px;
      border-radius: 8px;
      color: #000000;
    `}

  // !! size 
    ${(props) =>
    props.$size === 'md' &&
    css`
      width: 100%;
      height: 50px;
    `}
  ${(props) =>
    props.$size === 'lg' &&
    css`

    `}
 
`;
