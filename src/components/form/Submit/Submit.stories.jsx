import Submit from ".";

/**
 * `SelectBox` 컴포넌트는 사용자가 여러 옵션 중 하나를 선택할 수 있게 해주는 드롭다운 메뉴입니다. `label`, `id`, `name`, `disabled`, `flex`, `blind`, 그리고 `options` 등 다양한 속성을 통해 커스터마이징할 수 있어 다양한 사용 사례와 접근성 요구 사항에 적합합니다. 컴포넌트는 레이아웃 방향 조절(`flex` 속성) 및 라벨의 시각적 접근성(`blind` 옵션)을 지원하여 높은 유연성과 접근성을 제공합니다.

## 기능

- **Options**: 사용자에게 제공되는 선택지 목록입니다.
- **Disabled**: 선택 상자를 사용자가 조작할 수 없게 하여 비활성화 상태를 제어합니다.
- **Flex**: 라벨과 선택 상자의 레이아웃 배치를 조정합니다. 기본값은 라벨이 왼쪽에 위치하며, `column`은 상하 배치(라벨이 아래에 위치), `reverse`는 라벨이 오른쪽에 위치합니다.
- **Blind**: 시각 장애가 있는 사용자를 위해 라벨을 시각적으로 숨기는 기능입니다.
- **Label**: 선택 상자의 용도를 설명하는 텍스트 라벨입니다.

## 사용 방법

이 컴포넌트는 사용자가 정의된 옵션 목록 중 하나를 선택해야 하는 모든 양식에서 사용할 수 있습니다. 유연성과 접근성 기능 덕분에 다양한 애플리케이션과 복잡한 사용자 인터페이스에서도 접근성 있는 디자인을 요구하는 경우에 적합합니다.

```jsx
<SelectBox
  label="여기에 라벨 입력"
  id="uniqueId"
  name="selectName"
  disabled={false}
  flex="column"
  blind={false}
  options={['옵션 1', '옵션 2', '옵션 3']}
/>
```
 */

const SubmitStory = {
  title: "Components/Form/Submit",
  component: Submit,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    name: {
      control: "text",
      description: "Submit Name 입니다.",
      defaultValue: { summary: undefined },
      type: { summary: "string", required: true },
    },
    id: {
      control: "text",
      description: "Submit Id 입니다.",
      defaultValue: { summary: undefined },
      type: { summary: "string", required: true },
    },
    label: {
      control: "text",
      description: "Submit Label 입니다.",
      defaultValue: { summary: undefined },
      type: { summary: "string", required: true },
    },
    disabled: {
      control: "boolean",
      description: "input disabled 상태입니다.",
      defaultValue: { summary: undefined },
      type: { summary: "boolean", required: false },
    },
    blind: {
      control: "boolean",
      description: "Lable blind 상태입니다.",
      defaultValue: { summary: undefined },
      type: { summary: "boolean", required: false },
    },
  },
};

export default SubmitStory;

export const Default = {
  args: {
    name: "submit01",
    id: "submit01-01",
    label: "label",
    placeholder: "text",
  },
};
export const Disabled = {
  args: {
    name: "submit02",
    id: "submit02-02",
    label: "label",
    disabled: true,
    placeholder: "text",
  },
};
export const Blind = {
  args: {
    name: "submit03",
    id: "submit03-03",
    label: "label",
    blind: true,
    placeholder: "text",
  },
};
