import React, { useState } from 'react'
import styled from 'styled-components'

const TextArea = ({ height, placeholder, disabled, readonly, value, onChange }) => {
  const [inputText, setInputText] = useState(value || '')

  const handleChange = (e) => {
    const { value } = e.target;
    setInputText(value);
    if (onChange) {
      onChange(value);
    }
  };

  return (
    <Wrapper>
      <CustomTextArea
        className={`textarea ${readonly ? 'readonly' : ''}`}
        placeholder={placeholder}
        $height={height}
        onChange={handleChange}
        value={inputText}
        disabled={disabled}
        readOnly={readonly}
        maxRows={7}
      />
    </Wrapper>


  )
}

export default TextArea

const Wrapper = styled.div`
  width : 100% ;
`


const CustomTextArea = styled.textarea`
  width: 100%;
  height: ${(props) => `${(props.$height || '100%')}px`};
  border: 2px solid black;
  resize: none; 

  &:disabled {
    background: #e0e0e0; 
    color: #9e9e9e; 
    border-color: #bdbdbd; 
  }

  &.readonly {
    background: #fafafa;
    color: #757575; 
    border-color: #eeeeee; 
  }
`;