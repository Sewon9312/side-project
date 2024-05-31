import Modal from '.';
import TextArea from '../form/TextArea'
import styled from 'styled-components'
import useOpen from '../../customHooks/useOpen';

/**
 #### Text Props를 받으며 Modal Button은 사용페이지에서 `ModalButton` 컴포넌트를 불러와 개별 자식 요소로 추가
 #### Text Props이 있다면 하단 버튼 레이아웃 구조로 출력되며 Text Props가 없다면 전체 레이아웃 버튼 정렬로 출력
  #### Popup 페이지 컴포넌트 사용시 `useOpen` 커스텀 훅 사용
```jsx
 const { isOpen, open, close } = useOpen();
...
 <button onClick={open}>Open Modal</button>
      <Modal isOpen={isOpen} {...args}>
        <ModalButton onClick={close}>완료</ModalButton>
      </Modal>
```
 **/
const ModalStory = {
  title: 'Components/Modal/Modal',
  component: Modal,
  parameters: {
    layout: '',
  },
  decorators: [
    (Story) => (
      <Wrap >
        <Story />
      </Wrap>
    ),
  ],
  tags: ['autodocs'],
  argTypes: {
    text: {
      control: 'text',
      description: 'Modal 내부 Text 입니다.',
      defaultValue: { summary: undefined },
      type: { summary: 'string', required: false },
    },
    height: {
      control: 'select',
      description: 'modal 높이 사이즈 입니다.',
      defaultValue: { summary: undefined },
      type: { summary: 'string', required: true },
    },
  },
};

export const Default = (args) => {
  const { isOpen, open, close } = useOpen();

  const hanleClick = () => {
    alert('확인 버튼입니다')
  }

  return (
    <>
      <button onClick={open}>Open Dialog</button>
      <Modal isOpen={isOpen} onClose={close} onClick={hanleClick} {...args} >
        <Text>Description</Text>
        <TextArea />
      </Modal>
    </>
  );
};

export default ModalStory;

Default.args = {
  title: '반려',
  // height: 500

};
const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 300px;
`;

const Text = styled.span`
  margin-top : 12px;
  font-size : 12px;
  

`