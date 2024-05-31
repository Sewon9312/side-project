import React, { useState } from 'react';
import styled from 'styled-components';



const RadioGroup = ({ options, name, initialValue, onChange }) => {
  const [value, setValue] = useState(initialValue);

  const handleChange = (e) => {
    setValue(e.target.value);
    if (onChange) {
      onChange(e.target.value);
    }
  };

  return (
    <RadioGroupWrap>
      {options.map((option) => (
        <>
          <RadioInput
            key={option.id}
            type="radio"
            id={option.id}
            name={name}
            value={option.value}
            checked={value === option.value}
            onChange={handleChange}
          />
          <RadioLabel htmlFor={option.id}>{option.label}</RadioLabel>
        </>

      ))}
    </RadioGroupWrap>
  );
}

export default RadioGroup;

const RadioInput = styled.input`
  display: flex;

  + label {
    position: relative;
    cursor: pointer;
    padding-left: 35px;
    font-size: 16px;
    color: #333;
    user-select: none;

    &:before {
      content: '';
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      width: 18px;
      height: 18px;
      border: 2px solid #4a4a4a;
      border-radius: 50%;
      background-color: white;
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
      transition: border-color 0.3s;
    }

    &:after {
      content: '';
      position: absolute;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background-color: #007BFF;
      top: 50%;
      left: 5.5px;
      transform: translate(-50%, -50%);
      transform: scale(0) translateY(-50%);
      transition: transform 0.3s;
    }
  }

  &:checked + label:after {
    transform: scale(1) translateY(-50%);
  }

  &:focus + label:before {
    outline: none;
    border-color: #007BFF;
  }
`;

const RadioLabel = styled.label`
  
`;

const RadioGroupWrap = styled.div`
  display: flex;
  gap: 0 24px;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: #f8f9fa;
  max-width: 400px;
  margin: 20px auto;
`;