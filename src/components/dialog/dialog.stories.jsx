import Dialog, { DialogButton } from '.'
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
const DialogStory = {
  title: 'Components/Dialog/Dialog',
  component: Dialog,
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
  return (
    <>
      <button onClick={open}>Open Dialog</button>
      <Dialog isOpen={isOpen} {...args}>
        <DialogButton onClick={close}>취소</DialogButton>
        <DialogButton onClick={close}>확인</DialogButton>
      </Dialog>
    </>
  );
};

export default DialogStory;

Default.args = {
  title: '반려',
  content: '반려 하시겠습니까?',
  // height: 500

};
const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 300px;
`;