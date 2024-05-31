import Popup from '.';
import useOpen from '../../customHooks/useOpen';
/**
 #### Popup 페이지 컴포넌트 사용시 `useOpen` 커스텀 훅 사용
```jsx
  const { isOpen, open, close } = useOpen()
...
<button onClick={open}>Open Popup</button>
<Popup isOpen={isOpen} onClose={close} />
```
 #### 프로젝트 진행시 Popup Header,Footer 내부 요소 변할 시 분리 후 `children` 활용
 **/
const PopupStory = {
  title: 'Components/Popup/Popup',
  component: Popup,
  parameters: {
    layout: '',
  },
  decorators: [
    (Story) => (
      <div style={{ width: '375px', height: '675px' }}>
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],
  argTypes: {},
};

export const Default = (args) => {
  const { isOpen, open, close } = useOpen()
  return (
    <>
      <button onClick={open}>Open Popup</button>
      <Popup isOpen={isOpen} onClose={close} {...args} />
    </>
  );
};

export default PopupStory;

Default.args = {
  title: 'Popup',
};
export const FitSlide = (args) => {
  const { isOpen, open, close } = useOpen()
  return (
    <>
      <button onClick={open}>Open Popup</button>
      <Popup isOpen={isOpen} onClose={close} {...args}>
        Content
      </Popup>
    </>
  );
};

FitSlide.args = {
  title: 'Popup',
  type: 'fitslide',
};
export const FullSlide = (args) => {
  const { isOpen, open, close } = useOpen()
  return (
    <>
      <button onClick={open}>Open Popup</button>
      <Popup isOpen={isOpen} onClose={close} {...args}>
        Content
      </Popup>
    </>
  );
};

FullSlide.args = {
  title: 'Popup',
  type: 'fullslide',
};
