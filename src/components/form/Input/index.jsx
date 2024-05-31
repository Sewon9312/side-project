import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

const Input = ({
  label,
  id,
  name,
  flex,
  readonly,
  disabled,
  blind,
  placeholder,
  value
}) => {
  const [inputText, setInputText] = useState(value || '');
  const onChange = (e) => {
    setInputText(e.target.value);
  };

  const onReset = () => {
    setInputText('');
  };

  return (
    <Wrap flex={flex}>
      <FormWrap>
        <Form type="text" id={id} name={name} readOnly={readonly} disabled={disabled} placeholder={placeholder} onChange={onChange} value={inputText} />
        {inputText && <Clearbtn onClick={onReset}></Clearbtn>}
      </FormWrap>
      <Label htmlFor={id} blind={blind}>
        {label}
      </Label>
    </Wrap>
  );
};

export default Input;

const Wrap = styled.div`
    display: flex;
    flex-direction: row-reverse;
    gap: 10px;

    ${(props) =>
    props.flex === 'column' &&
    css`
            display: flex;
            flex-direction: column-reverse;
        `}
    ${(props) =>
    props.flex === 'reverse' &&
    css`
            display: flex;
            flex-direction: row;
        `}
`;

const Label = styled.label`
    ${(props) =>
    props.blind === true &&
    css`
            position: absolute;
            width: 1px;
            height: 1px;
            clip: rect(0, 0, 0, 0);
            overflow: hidden;
        `}
`;

const Form = styled.input`
    background-color: #f9fbfe;
    border: 1px solid #ecf1f8;
    border-radius: 4px;
    &:focus {
        outline: none;
        border: 1px solid #333;
    }
    &:disabled {
        background-color: #ededed;
        & + ${Label} {
            color: #ccc;
        }
    }
    &:read-only {
        background-color: #ededed;
        & + ${Label} {
            color: #ccc;
        }
    }
`;

const FormWrap = styled.div`
    position: relative;
`;
const Clearbtn = styled.button`
    position: absolute;
    top: 50%;
    right: 4px;
    transform: translateY(-50%);
    width: 16px;
    height: 16px;
    background-color: #000;
    border-radius: 50%;
`;
