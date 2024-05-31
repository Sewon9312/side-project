import React, { useState } from 'react';
import styled from 'styled-components';

const Tooltip = ({ children, content, position = 'top' }) => {
  const [isVisible, setIsVisible] = useState(false);

  const showTooltip = () => setIsVisible(true);
  const hideTooltip = () => setIsVisible(false);

  return (
    <Wrap onMouseEnter={showTooltip} onMouseLeave={hideTooltip}>
      {children}
      {isVisible && (
        <TooltipContent position={position}>
          {content}
        </TooltipContent>
      )}
    </Wrap>
  );
};

export default Tooltip;

const Wrap = styled.div`
  position: relative;
  cursor: pointer; /* 사용자에게 호버 가능함을 알려줌 */
`;

const TooltipContent = styled.div`
  position: absolute;
  white-space: nowrap;
  padding: 8px;
  background-color: black;
  color: white;
  border-radius: 4px;
  font-size: 14px;
  ${({ position }) => {
    switch (position) {
      case 'top':
        return `
          bottom: 100%;
          left: 50%;
          transform: translateX(-50%);
          margin-bottom: 10px; /* 여백 조정 */
        `;
      case 'right':
        return `
          left: 100%;
          top: 50%;
          transform: translateY(-50%);
          margin-left: 10px;
        `;
      case 'bottom':
        return `
          top: 100%;
          left: 50%;
          transform: translateX(-50%);
          margin-top: 10px;
        `;
      case 'left':
        return `
          right: 100%;
          top: 50%;
          transform: translateY(-50%);
          margin-right: 10px;
        `;
      default:
        return '';
    }
  }};

${Wrap}:hover & {
    opacity: 1;
    visibility: visible;
  }
`;

