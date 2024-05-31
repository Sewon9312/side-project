import React, { useState } from 'react';
import { css, styled } from 'styled-components';

const Tab = ({ tabs, underline }) => {
  const [selectedTab, setSelectedTab] = useState(tabs[0].id);

  const handleSelectedTab = (tabId) => {
    const selectedTab = tabId;
    setSelectedTab(selectedTab);
  };

  return (
    <div>
      {/* 탭 리스트 */}
      <TabList>
        {tabs.map((tab) => (
          <TabItem key={tab.id} active={selectedTab === tab.id ? true : false} onClick={() => handleSelectedTab(tab.id)} underline={underline}>
            {tab.name}
          </TabItem>
        ))}
      </TabList>

      {/* 탭 내용 */}
      <TabContentList>
        {tabs.map((tab) => (
          <TabContentItem key={tab.id} active={selectedTab === tab.id ? true : false}>
            {tab.component}
          </TabContentItem>
        ))}
      </TabContentList>
    </div>
  );
};

export default Tab;

const TabList = styled.div`
  display: flex;
  padding: 0;
  border-bottom: 1px solid #ccc;
`;

const TabItem = styled.button`
  padding: 10px 20px;
  cursor: pointer;
  background-color: transparent;
  border: none;
  border-bottom: 3px solid transparent;
  transition: all 0.3s ease;
  font-size: 16px;
  color: #666;

  & + & {
    margin-left: 12px;
  }

  ${(props) => props.active && css`
    font-weight: bold;
    color: #000;
    border-bottom-color: #007bff; /* 혹은 underline prop에 따라 색상을 설정할 수 있습니다 */
  `}

  &:hover {
    background-color: #f8f8f8;
  }

  ${props => props.underline && css`
    border-bottom: unset; /* underline prop이 true일 경우에만 적용 */
  `}
`;

const TabContentList = styled.div`
  padding: 20px;
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  margin-top: -1px; /* TabList의 border와 겹치지 않도록 조정 */
`;

const TabContentItem = styled.div`
  display: none;
  ${(props) => props.active && css`
    display: block;
  `}
`;