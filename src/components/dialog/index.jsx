import { CSSTransition } from 'react-transition-group';
import { css, styled } from 'styled-components';

const Dialog = ({ title, content, height, isOpen, children }) => {
  return (
    <>
      <Overlay isOpen={isOpen} />
      <Wrapper isOpen={isOpen} height={height}>
        {title && <span className='title'>{title}</span>}
        {content && <span className='text'>{content}</span>}
        <DialogButtonWrap>{children}</DialogButtonWrap>
      </Wrapper>
    </>



  );
};

export default Dialog;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  visibility: ${props => props.isOpen ? 'visible' : 'hidden'};
  z-index: 999; 
`;

const Wrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  width: 40%;
  height: ${props => props.height ? `${props.height}px` : 'auto'};
  padding: 24px;
  min-height: 120px;
  background: #ffffff;
  border-radius: 12px;
  visibility: ${props => props.isOpen ? 'visible' : 'hidden'};
  z-index: 1000; 

  .title {
    display: flex;
    justify-content: flex-start;
    color : #000000;
    font-size: 24px;
    font-weight: 700;
  }

  .text {
    display: flex;
    justify-content: flex-start;
    margin-top: 12px;
    color : #000000;
    font-weight: 400;
  }
`;

export const DialogButton = styled.button`
    width: 100%;
    height: 32px;
    border-radius: 8px;
    font-size: 16px;
    font-weight: 600;
    background-color: black;
    color : #ffffff;
    & + & {
        margin-left: 12px;
    }
    &:first-child {
     background-color: #ffffff;
     color: #000;
     border: 1px solid black;
    }
`;

const DialogButtonWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-top: 36px;
    ${DialogButton}
`;
