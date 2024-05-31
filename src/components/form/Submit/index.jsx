import React from 'react';
import styled, { css } from 'styled-components';
import Input from '../Input/index';

const Submit = ({ name, disabled, blind, btncol, placeholder }) => {
  return (
    <Wrap>
      <Input id="input01" name="input01" label="label" placeholder={placeholder} disabled={disabled} blind={blind} />
      <SubmitBtn name={name} disabled={disabled} btncol={btncol}>
        전송
      </SubmitBtn>
    </Wrap>
  );
};

export default Submit;

const Wrap = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
`;

const SubmitBtn = styled.button`
    padding: 7px 20px;
    background-color: #555;
    color: #fff;
    border-radius: 3px;
    &:hover {
        filter: brightness(0.9);
    }

    ${(props) =>
    props.disabled === true &&
    css`
            background-color: #cccccc;
        `}
`;
