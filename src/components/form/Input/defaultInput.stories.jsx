import Input from ".";

/**
 `Input` 컴포넌트는 사용자로부터 텍스트 입력을 받는 필드입니다. 이 컴포넌트는 라벨, 초기값, 자동완성, 읽기 전용, 비활성화 상태 등을 포함한 다양한 프로퍼티를 지원하여, 사용자 입력 폼의 다양한 요구 사항을 충족시킬 수 있습니다. 또한, 입력 값이 있을 경우 한 번에 지울 수 있는 클리어 버튼 기능을 제공합니다. 이 컴포넌트는 `styled-components`를 사용하여 스타일링되며, 레이아웃 방향(`flex`)이나 라벨의 시각적 숨김(`blind`)과 같은 추가적인 커스터마이징 옵션을 제공합니다.

## 주요 기능

- **label**: 입력 필드에 대한 라벨을 정의합니다.
- **id, name**: 폼 제출 시 사용될 필드의 식별자입니다.
- **flex**: 라벨과 입력 필드의 배치 방향을 설정합니다. ('row-reverse', 'column', 'reverse')
- **readonly**: 필드를 읽기 전용으로 설정합니다.
- **disabled**: 필드를 비활성화하여 사용자의 입력을 받지 않도록 설정합니다.
- **blind**: 라벨을 시각적으로 숨기되, 스크린 리더를 통해 접근 가능하게 합니다.
- **placeholder**: 사용자가 입력하기 전 필드에 표시될 안내 텍스트입니다.
- **value**: 입력 필드의 초기값을 설정합니다.
- **onChange**: 사용자 입력이 변경될 때 실행될 함수입니다.

## 사용 예

```jsx
<Input
  label="사용자 이름"
  id="user-name"
  name="username"
  flex="column"
  readonly={false}
  disabled={false}
  blind={false}
  placeholder="이름을 입력해주세요"
  value=""
/>
```
 *
 */

const InputStory = {
  title: "Components/Form/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    name: {
      control: "text",
      description: "Input Name 입니다.",
      defaultValue: { summary: undefined },
      type: { summary: "string", required: true },
    },
    id: {
      control: "text",
      description: "Input Id 입니다.",
      defaultValue: { summary: undefined },
      type: { summary: "string", required: true },
    },
    label: {
      control: "text",
      description: "Input Label 입니다.",
      defaultValue: { summary: undefined },
      type: { summary: "string", required: true },
    },
    readonly: {
      control: "boolean",
      description: "Input readonly 상태입니다.",
      defaultValue: { summary: undefined },
      type: { summary: "boolean", required: false },
    },
    disabled: {
      control: "boolean",
      description: "Input disabled 상태입니다.",
      defaultValue: { summary: undefined },
      type: { summary: "boolean", required: false },
    },
    blind: {
      control: "boolean",
      description: "label 화면에 보이지 않는 상태입니다.",
      defaultValue: { summary: undefined },
      type: { summary: "boolean", required: false },
    },
    flex: {
      control: "select",
      options: ["column", "reverse", undefined],
      description: "레이아웃 정렬입니다",
      defaultValue: { summary: undefined },
      type: { summary: "string", required: false },
    },
  },
};

export default InputStory;

export const Default = {
  args: {
    name: "input01",
    id: "input01-01",
    label: "label",
    placeholder: "text",
  },
};
export const ReadOnly = {
  args: {
    name: "input02",
    id: "input02-02",
    label: "label",
    readonly: true,
    placeholder: "text",
  },
};
export const Disabled = {
  args: {
    name: "input03",
    id: "input03-03",
    label: "label",
    disabled: true,
    placeholder: "text",
  },
};
export const Blind = {
  args: {
    name: "input04",
    id: "input04-04",
    label: "label",
    blind: true,
    placeholder: "text",
  },
};
export const Flexcolumn = {
  args: {
    name: "input05",
    id: "input05-05",
    label: "label",
    flex: "column",
    placeholder: "text",
  },
};
export const Flexreverse = {
  args: {
    name: "input06",
    id: "input06-06",
    label: "label",
    flex: "reverse",
    placeholder: "text",
  },
};
