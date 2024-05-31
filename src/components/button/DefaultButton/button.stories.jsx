import React from "react";
import Button from "./index";
import Icon from "../../Icon/index";


/**
`Button` 컴포넌트는 다양한 UI 상황에서 사용할 수 있는 범용 버튼입니다. 
<br />
이 컴포넌트는 타입(`type`), 버튼의 스타일 변형(`variant`), 크기(`size`), 비활성화 상태(`disabled`), 클릭 이벤트 핸들러(`onClick`), 그리고 시작과 끝 아이콘(`startIcon`, `endIcon`)을 포함한 여러 속성을 지원합니다. 

## 주요 속성

- **type**: 버튼의 HTML 타입을 정의합니다 (`button`, `submit`, `reset` 중 하나). 기본값은 `button`입니다.
- **variant**: 버튼의 스타일 변형을 지정합니다 (`primary`, `secondary`, `outlined` 중 하나).
- **size**: 버튼의 크기를 정의합니다 (`sm`, `md`, `lg` 중 하나). 기본값은 `sm`입니다.
- **disabled**: 버튼을 비활성화할지 여부를 결정합니다.
- **onClick**: 버튼 클릭 시 실행될 콜백 함수입니다.
- **startIcon**, **endIcon**: 버튼 내부에 시작과 끝 위치에 추가될 아이콘입니다.

## 사용 예

```jsx
<Button 
  type="submit" 
  variant="primary" 
  size="md" 
  disabled={false} 
  onClick={() => console.log('Clicked')}
  startIcon={<StartIcon />}
  endIcon={<EndIcon />}
>
  버튼
</Button>
```
 */

const ButtonStory = {
  title: "Components/Button/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },

  tags: ["autodocs"],

  argTypes: {
    type: {
      control: "select",
      options: ["button", "submit"],
      description: "버튼타입 입니다.",
      defaultValue: { summary: "button" },
      type: { summary: "string", required: false },
    },
    children: {
      description: "버튼 자식요소에 배치될 요소 입니다",
    },
    variant: {
      control: "select",
      options: ["primary", "secondary", "outlined"],
      description: "버튼 스타일타입 입니다.",
      defaultValue: { summary: "primary" },
      type: { summary: "string", required: false },
    },
    size: {
      control: "radio",
      options: ["sm", "md", "lg"],
      description: "사이즈 입니다.",
      defaultValue: { summary: "sm" },
      // type: { summary: "string", required: false },
    },
    disabled: {
      control: "boolean",
      description: "버튼 disabled 여부입니다.",
      defaultValue: { summary: false },
      type: { summary: "boolean", required: false },
    },
    startIcon: {
      control: null,
      description: "버튼 자식요소 앞에 배치될 아이콘 입니다",
      defaultValue: { summary: undefined },
    },
    endIcon: {
      control: null,
      description: "버튼 자식요소 뒤에 배치될 아이콘 입니다",
      defaultValue: { summary: undefined },
    },
    onClick: {
      control: "text",
      description: "버튼 클릭 메소드 입니다.",
      action: "onClick",
      type: { summary: "function", required: false },
    },
  },
};

export default ButtonStory;

const handleOnclick = () => {
  alert("버튼입니다");
};

export const Default = {
  args: {
    children: "버튼",
    onClick: handleOnclick,
  },
};


export const DefaultDark = {
  args: {
    children: "버튼",
    onClick: handleOnclick,
  },
};

export const Disabled = {
  args: {
    children: "버튼",
    onClick: handleOnclick,
    disabled: true,
  },
};

export const StartIcon = {
  args: {
    children: "버튼",
    onClick: handleOnclick,
    startIcon: <Icon icon={"example"} width={16} height={16} />,
  },
};

export const EndIcon = {
  args: {
    children: "버튼",
    onClick: handleOnclick,
    endIcon: <Icon icon={"example"} width={16} height={16} />,
  },
};

