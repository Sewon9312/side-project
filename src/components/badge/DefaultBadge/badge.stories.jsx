import React from "react";

import Badge from "./index";
import Icon from "../../Icon/index";

/**
`Badge` 컴포넌트는 아이콘, 버튼 등 다양한 요소에 숫자나 표시를 추가하여 정보의 중요성을 강조하는 UI 요소입니다.
<br />
 예를 들어, 알림 개수, 새 메시지의 수 등을 사용자에게 직관적으로 보여주는 데 사용됩니다. 이 컴포넌트는 자식 요소에 상대적으로 배치되며, `count` prop을 통해 표시할 숫자를 설정할 수 있습니다.

## 주요 속성

- **count**: 배지에 표시될 숫자 또는 내용입니다. 이 내용은 배지의 `::before` 가상 요소를 통해 표시됩니다.
- **children**: 배지가 적용될 대상 요소입니다. 이 요소는 배지의 위치와 크기에 영향을 줄 수 있습니다.

## 사용 예

```jsx
<Badge count={4}>
  <button>알림</button>
</Badge>
```
 */

const BadgeStory = {
  title: "Components/Badge/Badge",
  component: Badge,
  parameters: {
    layout: "centered",
  },

  tags: ["autodocs"],

  argTypes: {
    // props 명
    count: {
      control: "text",
      description: "건수 입니다.",
      defaultValue: { summary: undefined },
      type: { summary: "", required: true },
    },
    children: {
      description: "보여질 icon요소 입니다",
    },
  },
};

export default BadgeStory;

export const Default = () => {
  return (
    <Badge count={3}>
      <Icon icon={"bell"} width={40} height={40} />
    </Badge>
  );
};
