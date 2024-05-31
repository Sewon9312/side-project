import { useState } from 'react';
import { css, styled } from 'styled-components';

const Checkbox = ({ name, id, label, blind, disabled, checked, flex }) => {
    // 로컬 상태 추가
    const [isChecked, setIsChecked] = useState(checked || false);

    // 체크박스 상태 토글 함수
    const toggleChecked = () => {
        setIsChecked(!isChecked);
    };

    return (
        <Wrap flex={flex}>
            <Form type="checkbox" name={name} id={id} disabled={disabled} checked={isChecked} onChange={toggleChecked}></Form>
            <Label htmlFor={id} blind={blind} flex={flex}>
                {label}
            </Label>
        </Wrap>
    );
};

export default Checkbox;

const Wrap = styled.div`
    display: flex;
    align-items: center;
    ${(props) =>
        props.flex === 'reverse' &&
        css`
            flex-direction: row-reverse;
        `}
`;

const Label = styled.label`
    margin: 0 0 0 6px;
    font-size: 14px;
    font-weight: 500;
    line-height: 21px;
    color: #000;
    ${(props) =>
        props.flex === 'reverse' &&
        css`
            margin: 0 6px 0 0;
        `}
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
    display: block;
    width: 24px;
    height: 24px;
    border: 1px solid #ccc;
    border-radius: 50%;
    &:checked {
        background-color: #7974ff;
        & + ${Label} {
            font-weight: 700;
        }
    }
    &:disabled {
        background-color: #ccc;
        &:checked {
            background-color: #bdbbff;
        }
        & + ${Label} {
            color: #ccc;
        }
    }
`;
