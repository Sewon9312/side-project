import TextArea from ".";

/**
 * `TextArea` 컴포넌트는 사용자가 텍스트를 입력할 수 있는 멀티라인 텍스트 필드입니다. 사용자 정의 높이, 플레이스홀더 텍스트, 비활성화 상태, 읽기 전용 옵션, 초기값 설정 및 값 변경에 대한 콜백 함수 지원 등의 기능을 제공합니다. 이 컴포넌트는 사용자로부터 긴 형태의 입력을 받거나, 설정값을 표시하는 등 다양한 시나리오에서 활용할 수 있습니다.

## 주요 기능

- **height**: 컴포넌트의 높이를 사용자가 정의할 수 있습니다.
- **placeholder**: 사용자가 입력하기 전에 표시되는 텍스트입니다.
- **disabled**: 컴포넌트를 비활성화하여 사용자 입력을 막을 수 있습니다.
- **readonly**: 컴포넌트를 읽기 전용으로 설정하여 사용자가 텍스트를 수정하지 못하게 할 수 있습니다.
- **value**: 컴포넌트의 초기값을 설정할 수 있습니다.
- **onChange**: 텍스트가 변경될 때 실행될 콜백 함수입니다.

## 사용 예

```jsx
<TextArea
  height={200}
  placeholder="여기에 입력하세요..."
  disabled={false}
  readonly={false}
  value=""
  onChange={(value) => console.log(value)}
/>

```
 */

const TextAreaStory = {
  title: "Components/Form/TextArea",
  component: TextArea,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    // props 명
    height: {
      control: "number",
      description: "height 값입니다.",
      defaultValue: { summary: undefined },
      type: { summary: "number", required: false },
    },
    placeholder: {
      control: "text",
      description: "placeholder 입니다.",
      defaultValue: { summary: undefined },
      type: { summary: "string", required: false },
    },
    disabled: {
      control: "text",
      description: "disabled 입니다.",
      defaultValue: { summary: undefined },
      type: { summary: "boolean", required: false },
    },
    readonly: {
      control: "text",
      description: "readonly 입니다.",
      defaultValue: { summary: undefined },
    },
    value: {
      control: "text",
      description: "value 값입니다.",
      defaultValue: { summary: undefined },
      type: { summary: "string", required: false },
    },
    onChange: {
      control: "text",
      description: "text 변경시 바뀐 value 값을 넘겨주는 메소드 입니다 ",
      defaultValue: { summary: undefined },
      type: { summary: "function", required: false },
    },
  },
};

export default TextAreaStory;

export const Default = {
  args: {},
};

export const height = {
  args: {
    height: 100,
  },
};

export const placeholder = {
  args: {
    placeholder: "placeholder 입니다",
  },
};

export const disabled = {
  args: {
    disabled: true,
  },
};

export const readonly = {
  args: {
    readonly: true,
  },
};
