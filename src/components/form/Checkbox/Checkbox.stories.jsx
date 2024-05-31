import Checkbox from "./index";

/**
 `Checkbox` 컴포넌트는 사용자가 여러 옵션 중 하나 또는 여러 개를 선택할 수 있도록 하는 체크박스 UI 요소입니다. 이 컴포넌트는 사용자 정의 가능한 라벨, 초기 체크 상태, 비활성화 옵션, 라벨의 시각적 숨김 처리 등을 지원하여, 폼에서 다양한 선택지를 제공하는데 적합합니다. 또한, 컴포넌트의 배치 방향을 설정할 수 있는 `flex` 속성을 통해 유연한 레이아웃을 구성할 수 있습니다.

## 주요 기능

- **name**: 체크박스를 그룹화하기 위한 이름입니다.
- **id**: 체크박스를 식별하기 위한 고유 ID입니다.
- **label**: 체크박스 옆에 표시될 라벨 텍스트입니다.
- **blind**: 라벨을 시각적으로 숨기되, 스크린 리더를 통해 접근 가능하게 하는 옵션입니다.
- **disabled**: 체크박스를 비활성화하여 사용자 입력을 막는 옵션입니다.
- **checked**: 체크박스의 초기 선택 상태를 설정합니다.
- **flex**: 라벨과 체크박스의 배치 방향을 정하는 옵션입니다. ('reverse'를 설정할 경우 라벨이 체크박스의 왼쪽에 위치합니다.)

## 사용 예

```jsx
<Checkbox
  name="exampleGroup"
  id="example1"
  label="예제 옵션"
  blind={false}
  disabled={false}
  checked={true}
  flex="reverse"
/>
```
 */

const CheckBoxStory = {
  title: "Components/Form/Checkbox",
  component: Checkbox,
  parameters: {
    layout: "centered",
  },

  tags: ["autodocs"],

  argTypes: {
    name: {
      control: "text",
      description: "CheckBox Name 입니다.",
      defaultValue: { summary: undefined },
      type: { summary: "string", required: true },
    },
    id: {
      control: "text",
      description: "CheckBox Id 입니다.",
      defaultValue: { summary: undefined },
      type: { summary: "string", required: true },
    },
    label: {
      control: "text",
      description: "CheckBox Label 입니다.",
      defaultValue: { summary: undefined },
      type: { summary: "string", required: true },
    },
    blind: {
      control: "boolean",
      description: "CheckBox Label blind 여부 입니다.",
      defaultValue: { summary: undefined },
      type: { summary: "boolean", required: false },
    },

    disabled: {
      control: "boolean",
      description: "CheckBox disabled 상태 여부 입니다.",
      defaultValue: { summary: undefined },
      type: { summary: "boolean", required: false },
    },
    checked: {
      control: "boolean",
      description: "CheckBox checked 여부 입니다.",
      defaultValue: { summary: undefined },
      type: { summary: "boolean", required: false },
    },
    flex: {
      control: "select",
      options: ["reverse", undefined],
      description: "CheckBox 정렬 방식 입니다.",
      defaultValue: { summary: undefined },
      type: { summary: "string", required: false },
    },
  },
};

export default CheckBoxStory;

export const Default = {
  args: {
    name: "input01",
    id: "input01-01",
    label: "Label",
    blind: true,
    disabled: undefined,
    checked: undefined,
    flex: undefined,
  },
};
export const Checked = {
  args: {
    name: "input01",
    id: "input01-02",
    label: "Label",
    blind: true,
    disabled: undefined,
    checked: true,
    flex: undefined,
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
    flex: undefined,
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
    flex: undefined,
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
export const flex = {
  args: {
    name: "input01",
    id: "input01-08",
    label: "Label",
    disabled: undefined,
    checked: undefined,
    flex: "reverse",
  },
};
