import React from "react";

import IconButton from "./index";

/**

`IconButton` 컴포넌트는 아이콘을 포함한 버튼 UI 요소입니다.
<br />
클릭할 때 특정 액션을 실행합니다. 이 컴포넌트는 아이콘(`icon`), 너비(`width`), 높이(`height`), 클릭 이벤트 핸들러(`onClick`) 등의 속성을 지원하여, 사용자 인터페이스에 아이콘 버튼을 효과적으로 통합할 수 있습니다.

## 주요 속성

- **icon**: 표시할 아이콘의 파일 경로입니다. `/assets/images/icons/` 디렉토리 내의 SVG 파일 이름을 지정합니다.
- **width**: 아이콘 버튼의 너비를 설정합니다. 기본값은 `18px`입니다.
- **height**: 아이콘 버튼의 높이를 설정합니다. 기본값은 `18px`입니다.
- **onClick**: 버튼 클릭 시 실행될 콜백 함수입니다.

## 사용 예

```jsx
<IconButton
  icon="IconName"
  width={24}
  height={24}
  onClick={() => console.log('IconButton clicked')}
/>
```
 */

const IconButtonStory = {
  title: "Components/Button/IconButton",
  component: IconButton,
  parameters: {
    layout: "centered",
  },

  tags: ["autodocs"],

  argTypes: {
    width: {
      control: "number",
      description: "Icon Width 입니다.",
      defaultValue: { summary: 18 },
      type: { summary: "number", required: false },
    },
    height: {
      control: "number",
      description: "Icon Height 입니다.",
      defaultValue: { summary: 18 },
      type: { summary: "number", required: false },
    },
    icon: {
      control: "text",
      description: "Icon 명 입니다.",
      defaultValue: { summary: undefined },
      type: { summary: "string", required: true },
    },
    onClick: {
      control: "function",
      description: "Icon 클릭 이벤트 입니다.",
      defaultValue: { summary: undefined },
      type: { summary: "function", required: false },
    },
  },
};

export default IconButtonStory;

const handleOnclick = () => {
  alert("버튼입니다");
};

export const Default = {
  args: {
    width: 20,
    height: 20,
    icon: "example",
    onClick: handleOnclick,
  },
};
