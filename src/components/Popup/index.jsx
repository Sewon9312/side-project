import { CSSTransition } from 'react-transition-group';
import { css, styled } from 'styled-components';

const Popup = ({ title, isOpen, onClose, children, type }) => {
    return (
        <CSSTransition in={isOpen} timeout={600} classNames="fade" unmountOnExit>
            <Wrapper type={type}>
                <PopupWrap>
                    <PopupHeader>
                        <PopupTitle>{title}</PopupTitle>
                        <PopupCloseBtn onClick={onClose}>X</PopupCloseBtn>
                    </PopupHeader>
                    <PopupContent>{children}</PopupContent>
                    <PopupFooter></PopupFooter>
                </PopupWrap>
            </Wrapper>
        </CSSTransition>
        // header , footer 프로젝트시 분리
    );
};

export default Popup;

const PopupWrap = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
`;

const Wrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);

    &.fade-enter {
        opacity: 0;
        visibility: hidden;
    }
    &.fade-enter-active {
        opacity: 1;
        visibility: visible;
        transition: all 0.2s;
    }
    &.fade-exit {
        opacity: 1;
        visibility: visible;
    }
    &.fade-exit-active {
        opacity: 0;
        visibility: hidden;
        transition: all 0.2s;
    }
    ${(props) =>
        (props.type === 'fitslide' || props.type === 'fullslide') &&
        css`
            ${PopupWrap} {
                ${props.type === 'fitslide' &&
                css`
                    height: auto;
                `}
                border-radius: 12px 12px 0 0;
                overflow: hidden;
            }
            &.fade-enter {
                ${PopupWrap} {
                    bottom: -100%;
                }
            }
            &.fade-enter-active,
            &.fade-enter-done {
                ${PopupWrap} {
                    bottom: 0;
                    transition: all 0.6s;
                }
            }
            &.fade-exit {
                ${PopupWrap} {
                    bottom: 0;
                }
            }
            &.fade-exit-active {
                ${PopupWrap} {
                    bottom: -100%;
                    transition: all 0.6s;
                }
            }
        `}
`;

const PopupHeader = styled.div`
    position: relative;
    flex: 0 0 auto;
    height: 64px;
    text-align: center;
    border-bottom: 1px solid #ccc;
    background: #f4f6f8;
`;

const PopupContent = styled.div`
    height: 100%;
    background: #f4f6f8;
`;

const PopupFooter = styled.div`
    flex: 0 0 auto;
    height: 64px;
    border-top: 1px solid #ccc;
    background: #f4f6f8;
`;

const PopupCloseBtn = styled.button`
    position: absolute;
    top: 50%;
    right: 16px;
    transform: translateY(-50%);
    font-size: 24px;
`;

const PopupTitle = styled.div`
    font-size: 16px;
    font-weight: 700;
    line-height: 64px;
`;
