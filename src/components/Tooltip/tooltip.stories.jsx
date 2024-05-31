import React from "react";
import styled from "styled-components";
import Tooltip from ".";

/**
`Tooltip` 컴포넌트는 특정 요소에 마우스를 올렸을 때 추가 정보를 제공하는 툴팁을 표시하는 UI 요소입니다.
<br />
컴포넌트를 호버할 때 설정된 내용(`content`)이 특정 위치(`position`)에 따라 나타나게 됩니다. 이 컴포넌트는 사용자 인터페이스에서 추가 정보가 필요할 때 유용하게 사용될 수 있습니다.

## 주요 속성

- **children**: 툴팁이 적용될 대상 요소입니다.
- **content**: 툴팁에 표시될 내용입니다.
- **position**: 툴팁이 표시될 위치입니다. `'top'`, `'right'`, `'bottom'`, `'left'` 중 하나를 선택할 수 있으며, 기본값은 `'top'`입니다.

## 사용 예

```jsx
<Tooltip content="여기에 툴팁 내용을 입력하세요" position="right">
  <button>호버하세요</button>
</Tooltip>
```
 */

const TooltipStory = {
  title: "Components/Tooltip/Tooltip",
  component: Tooltip,
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <Wrap>
        <Story />
      </Wrap>
    ),
  ],
  tags: ["autodocs"],
  argTypes: {
    content: {
      control: "text",
      description: "Tooltip에 표시될 내용",
    },
    position: {
      control: { type: "select", options: ["top", "right", "bottom", "left"] },
      description: "Tooltip의 위치",
    },
    children: {
      control: "text",
      description: "Tooltip이 감싸고 있는 자식 요소의 텍스트",
    },
  },
};

export default TooltipStory;

const Template = ({ children, ...args }) => (
  <Tooltip {...args}>{children}</Tooltip>
);

export const Top = Template.bind({});
Top.args = {
  content: "Top 위치의 툴팁입니다.",
  position: "top",
  children: "마우스를 올려보세요",
};

export const Right = Template.bind({});
Right.args = {
  content: "Right 위치의 툴팁입니다.",
  position: "right",
  children: "마우스를 올려보세요",
};

export const Bottom = Template.bind({});
Bottom.args = {
  content: "Bottom 위치의 툴팁입니다.",
  position: "bottom",
  children: "마우스를 올려보세요",
};

export const Left = Template.bind({});
Left.args = {
  content: "Left 위치의 툴팁입니다.",
  position: "left",
  children: "마우스를 올려보세요",
};

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 300px;
`;
