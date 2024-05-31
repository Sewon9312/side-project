import React from "react";

import RadioGroup from ".";

/**
# RadioGroup 컴포넌트

`RadioGroup` 컴포넌트는 여러 라디오 버튼을 그룹화하여 사용자에게 제공되는 선택지 중 하나를 선택할 수 있게 합니다. 이 컴포넌트는 `options`, `name`, `initialValue`, `onChange` 같은 속성을 통해 커스터마이징할 수 있으며, 각 옵션은 고유한 `id`, 표시될 `label`, 그리고 해당 옵션의 `value`를 가집니다. 사용자가 선택을 변경하면 `onChange` 콜백 함수를 통해 해당 변경 사항을 상위 컴포넌트로 전달할 수 있습니다.

## 주요 속성

- **options**: 선택 가능한 옵션들의 배열입니다. 각 옵션은 `id`, `label`, `value` 속성을 포함해야 합니다.
- **name**: 라디오 버튼 그룹의 이름입니다. HTML의 `name` 속성과 동일하게 동작하여, 같은 이름을 가진 라디오 버튼들 중 하나만 선택할 수 있게 합니다.
- **initialValue**: 컴포넌트가 마운트될 때 선택되어 있는 값의 초기 상태입니다.
- **onChange**: 사용자가 옵션을 선택할 때 실행될 콜백 함수입니다. 선택된 옵션의 `value`가 인자로 전달됩니다.

## 사용 예

```jsx
<RadioGroup
  name="exampleGroup"
  options={[
    { id: 'option1', value: '1', label: '옵션 1' },
    { id: 'option2', value: '2', label: '옵션 2' },
    { id: 'option3', value: '3', label: '옵션 3' },
  ]}
  initialValue="1"
  onChange={(value) => console.log(value)}
/>
```
 */

const RadioGroupStory = {
  title: "Components/Form/RadioGroup",
  component: RadioGroup,
  parameters: {
    layout: "centered",
  },

  tags: ["autodocs"],

  argTypes: {
    radioItems: {
      control: "object",
      description: "Radio Name,id,label,disabled,checked 입니다.",
      defaultValue: { summary: undefined },
      type: { summary: "object", required: true },
    },
    initialValue: {
      control: "object",
      description: "초기 체크된 아이템 객체입니다.",
      defaultValue: { summary: undefined },
      type: { summary: "object", required: false },
    },
  },
};

export default RadioGroupStory;

export const Default = {
  args: {
    name: "gender",
    options: [
      { id: "1", value: "male", label: "Male" },
      { id: "2", value: "female", label: "Female" },
    ],
    initialValue: "male",
  },
};
