import React from "react";

import Radio from ".";

/**
 `Radio` 컴포넌트는 사용자가 제공된 옵션 중 하나를 선택할 수 있는 라디오 버튼을 구현합니다. 초기 선택 상태, 비활성화 상태, 라벨의 시각적 표현 및 레이아웃 방향 등을 커스터마이징할 수 있는 속성을 제공합니다. 이 컴포넌트는 단일 선택 필드가 필요한 양식이나 설문 조사 등에서 유용하게 사용될 수 있습니다.

## 주요 기능

- **name**: 라디오 버튼 그룹을 식별하기 위한 이름입니다.
- **id**: 라디오 버튼을 식별하기 위한 고유 ID입니다.
- **label**: 라디오 버튼 옆에 표시될 라벨입니다.
- **blind**: 라벨을 시각적으로 숨길지 여부를 결정합니다. 접근성을 위해 스크린 리더에서는 여전히 읽힙니다.
- **disabled**: 라디오 버튼을 비활성화할지 여부를 결정합니다.
- **checked**: 라디오 버튼의 초기 선택 상태입니다.
- **flex**: 라벨과 라디오 버튼의 배치 방향을 결정합니다. 기본값은 라벨이 오른쪽에 위치하며, 'reverse'로 설정할 경우 라벨이 왼쪽에 위치합니다.

## 사용 예

```jsx
<Radio
  name="exampleGroup"
  id="example1"
  label="예제 라벨"
  blind={false}
  disabled={false}
  checked={false}
  flex="reverse"
/>
```
 */

const RadioStory = {
  title: "Components/Form/Radio",
  component: Radio,
  parameters: {
    layout: "centered",
  },

  tags: ["autodocs"],

  argTypes: {
    name: {
      control: "text",
      description: "Radio Name 입니다.",
      defaultValue: { summary: undefined },
      type: { summary: "string", required: true },
    },
    id: {
      control: "text",
      description: "Radio Id 입니다.",
      defaultValue: { summary: undefined },
      type: { summary: "string", required: true },
    },
    label: {
      control: "text",
      description: "Radio Label 입니다.",
      defaultValue: { summary: undefined },
      type: { summary: "string", required: true },
    },
    blind: {
      control: "boolean",
      description: "Radio Label blind 여부 입니다.",
      defaultValue: { summary: undefined },
      type: { summary: "boolean", required: false },
    },

    disabled: {
      control: "boolean",
      description: "Radio disabled 상태 여부 입니다.",
      defaultValue: { summary: undefined },
      type: { summary: "boolean", required: false },
    },
    checked: {
      control: "boolean",
      description: "Radio checked 여부 입니다.",
      defaultValue: { summary: undefined },
      type: { summary: "boolean", required: false },
    },
    flex: {
      control: "select",
      options: ["reverse", undefined],
      description: "Radio 정렬 방식 입니다.",
      defaultValue: { summary: undefined },
      type: { summary: "string", required: false },
    },
  },
};

export default RadioStory;

export const Default = {
  args: {
    name: "input01",
    id: "input01-01",
    label: "Label",
    blind: true,
    disabled: undefined,
    checked: undefined,
  },
};
export const Checked = {
  args: {
    name: "input02",
    id: "input01-02",
    label: "Label",
    blind: true,
    disabled: undefined,
    checked: true,
  },
};
export const Disabled = {
  args: {
    name: "input01",
    id: "input01-03",
    label: "Label",
    blind: true,
    disabled: true,
    checked: undefined,
  },
};
export const DisabledChecked = {
  args: {
    name: "input01",
    id: "input01-04",
    label: "Label",
    blind: true,
    disabled: true,
    checked: true,
  },
};
export const Label = {
  args: {
    name: "input01",
    id: "input01-05",
    label: "Label",
    disabled: undefined,
    checked: undefined,
    flex: undefined,
  },
};
export const LabelChecked = {
  args: {
    name: "input01",
    id: "input01-06",
    label: "Label",
    disabled: undefined,
    checked: true,
    flex: undefined,
  },
};
export const LabelDisabled = {
  args: {
    name: "input01",
    id: "input01-07",
    label: "Label",
    disabled: true,
    checked: undefined,
    flex: undefined,
  },
};
export const Reverse = {
  args: {
    name: "input01",
    id: "input01-08",
    label: "Label",
    disabled: undefined,
    checked: undefined,
    flex: "reverse",
  },
};
