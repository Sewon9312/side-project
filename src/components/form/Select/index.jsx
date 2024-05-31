import React from 'react';
import styled, { css } from 'styled-components';


const SelectBox = ({ label, id, name, disabled, flex, blind, options }) => {
  return (
    <Wrap flex={flex}>
      <Select id={id} name={name} disabled={disabled}>
        {options.map((option, index) => (
          <option key={index}>{option}</option>
        ))}
      </Select>
      <Label htmlFor={id} blind={blind}>
        {label}
      </Label>
    </Wrap>
  );
};

export default SelectBox;

const Wrap = styled.div`
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    gap: 6px;

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
    margin-right: 10px;

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

const Select = styled.select`
    background-color: #f9fbfe;
    border: 1px solid #ecf1f8;
    padding: 5px 20px;
    border-radius: 5px;

    &:disabled {
        background-color: #ededed;
    }
`;
