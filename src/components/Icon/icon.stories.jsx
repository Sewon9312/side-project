import React from "react";

import Icon from ".";

/**

`Icon` 컴포넌트는 SVG 아이콘을 표시하기 위해 사용됩니다. 
<br />
 `icon`, `width`, `height` 속성을 통해 아이콘의 종류와 크기를 지정할 수 있습니다. 
`/assets/images/icons/` 디렉토리 내의 SVG 파일 이름을 `icon` 속성에 전달하여 사용합니다.

## 주요 속성

- **icon**: 표시할 아이콘의 파일 이름입니다. `/assets/images/icons/` 디렉토리 내에 위치한 SVG 파일 이름을 기준으로 합니다.
- **width**: 아이콘의 너비를 지정합니다. 기본값은 `18px`입니다.
- **height**: 아이콘의 높이를 지정합니다. 기본값은 `18px`입니다.

## 사용 예

```jsx
<Icon
  icon="IconName"
  width={24}
  height={24}
/>
```

 */

const IconStory = {
  title: "Components/Icon/Icon",
  component: Icon,
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
  },
};

export default IconStory;

export const Default = {
  args: {
    width: 20,
    height: 20,
    icon: "example",
  },
};
