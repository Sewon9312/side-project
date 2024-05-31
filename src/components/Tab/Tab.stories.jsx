import Tab from ".";
/**

`Tab` 컴포넌트는 여러 탭 중 하나를 선택하여 해당 탭의 내용을 표시하는 UI 요소입니다.
<br />
탭을 클릭하면, 그에 해당하는 컨텐츠 영역이 활성화되어 보여집니다. 이 컴포넌트는 탭의 이름과 탭에 따라 표시될 컴포넌트를 `tabs` 배열로 받으며, 선택된 탭에 따라 하단의 선(underline)의 유무를 `underline` prop을 통해 설정할 수 있습니다.

## 주요 기능

- **tabs**: 탭의 이름과 해당 탭을 클릭했을 때 표시될 컴포넌트를 포함하는 객체 배열입니다. 각 객체는 `id`, `name`, `component` 속성을 가져야 합니다.
- **underline**: 선택된 탭 아래에 밑줄을 표시할지 여부를 결정합니다. 이 prop이 `true`일 경우, 밑줄이 표시되지 않습니다.

## 사용 예

```jsx
<Tab
  tabs={[
    { id: 'tab1', name: '탭 1', component: <Component1 /> },
    { id: 'tab2', name: '탭 2', component: <Component2 /> },
    { id: 'tab3', name: '탭 3', component: <Component3 /> }
  ]}
  underline={false}
/>
```
 **/
const TabStory = {
  title: "Components/Tab/Tab",
  component: Tab,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    tabs: {
      control: "array",
      description: "tab name,id,component 입니다.",
      defaultValue: { summary: undefined },
      type: { summary: "array", required: true },
    },
    underline: {
      control: "boolean",
      description: "tab underline 여부 입니다.",
      defaultValue: { summary: undefined },
      type: { summary: "boolean", required: false },
    },
  },
};

export default TabStory;

export const Default = {
  args: {
    tabs: [
      {
        id: "tab1",
        name: "Tab 1",
        component: <div>Content for Tab 1</div>,
      },
      {
        id: "tab2",
        name: "Tab 2",
        component: <div>Content for Tab 2</div>,
      },
      // ... 기타 탭
    ],
  },
};
export const UnderLine = {
  args: {
    underline: true,
    tabs: [
      {
        id: "tab1",
        name: "Tab 1",
        component: <div>Content for Tab 1</div>,
      },
      {
        id: "tab2",
        name: "Tab 2",
        component: <div>Content for Tab 2</div>,
      },
      // ... 기타 탭
    ],
  },
};
