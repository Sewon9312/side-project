import Select from '.';

/**
 * `SelectBox` 컴포넌트는 사용자가 여러 옵션 중 하나를 선택할 수 있는 드롭다운 메뉴를 제공합니다. 이 컴포넌트는 라벨, 고유 ID, 이름, 비활성화 상태, 레이아웃 방향, 접근성 옵션(`blind`), 그리고 선택 가능한 옵션들을 포함한 다양한 속성을 지원합니다. 사용자 인터페이스에서 입력 양식의 일부로서, 또는 설정 선택 등의 다양한 목적으로 활용될 수 있습니다.

## 주요 속성

- **label**: 드롭다운 옆에 표시될 라벨입니다.
- **id**: 컴포넌트 고유의 ID로, `<label>` 태그와 연결됩니다.
- **name**: 폼 데이터를 제출할 때 사용되는 필드의 이름입니다.
- **disabled**: 선택 상자를 비활성화하여 사용자 입력을 제한합니다.
- **flex**: 라벨과 드롭다운의 배치 방향을 정합니다. (`row-reverse`, `column`, `reverse` 중 선택)
- **blind**: 시각적으로 숨겨진 라벨을 위한 접근성 옵션입니다.
- **options**: 드롭다운에서 선택 가능한 옵션들의 배열입니다.

## 사용 예

```jsx
<SelectBox
  label="선택"
  id="select1"
  name="option"
  disabled={false}
  flex="column"
  blind={false}
  options={[{value: '1', text: '옵션 1'}, {value: '2', text: '옵션 2'}]}
/>
```
 */

const SelectStory = {
  title: 'Components/Form/Select',
  component: Select,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    name: {
      control: 'text',
      description: 'SelectBox Name 입니다.',
      defaultValue: { summary: undefined },
      type: { summary: 'string', required: true },
    },
    id: {
      control: 'text',
      description: 'SelectBox Id 입니다.',
      defaultValue: { summary: undefined },
      type: { summary: 'string', required: true },
    },
    label: {
      control: 'text',
      description: 'SelectBox Label 입니다.',
      defaultValue: { summary: undefined },
      type: { summary: 'string', required: true },
    },
    disabled: {
      control: 'boolean',
      description: 'select disabled 상태입니다.',
      defaultValue: { summary: undefined },
      type: { summary: 'boolean', required: false },
    },
    blind: {
      control: 'boolean',
      description: 'label 화면에 보이지 않는 상태입니다.',
      defaultValue: { summary: undefined },
      type: { summary: 'boolean', required: false },
    },
    flex: {
      control: 'select',
      options: ['column', 'reverse', undefined],
      description: '레이아웃 정렬입니다',
      defaultValue: { summary: undefined },
      type: { summary: 'string', required: false },
    },
  },
};

export default SelectStory;

export const Default = {
  args: {
    name: 'selectBox01',
    id: 'selectBox01-01',
    label: 'label',
    options: ['text1', 'text2', 'text3'],
  },
};
export const Disabled = {
  args: {
    name: 'selectBox02',
    id: 'selectBox02-02',
    label: 'label',
    disabled: true,
    options: ['text1', 'text2', 'text3'],
  },
};

export const Flexcolumn = {
  args: {
    name: 'selectBox03',
    id: 'selectBox03-03',
    label: 'label',
    flex: 'column',
    options: ['text1', 'text2', 'text3'],
  },
};
export const Flexreverse = {
  args: {
    name: 'selectBox04',
    id: 'selectBox04-04',
    label: 'label',
    flex: 'reverse',
    options: ['text1', 'text2', 'text3'],
  },
};

export const Blind = {
  args: {
    name: 'selectBox05',
    id: 'selectBox05-05',
    label: 'label',
    blind: true,
    options: ['text1', 'text2', 'text3'],
  },
};
export const Option = {
  args: {
    name: 'selectBox06',
    id: 'selectBox06-06',
    label: 'label',
    blind: true,
    options: ['option1', 'option2', 'option3'],
  },
};
