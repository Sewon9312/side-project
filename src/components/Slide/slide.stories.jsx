import React from "react";
import Slide from "./index";
import styled from "styled-components";

/**
`Slide` 컴포넌트는 Swiper 라이브러리를 기반으로 한 슬라이드 쇼 구현체입니다. 
<br / >
사용자 정의 높이, 내비게이션 버튼, 진행 상태 표시줄(pagination) 등을 설정할 수 있는 옵션을 제공합니다. 
이 컴포넌트는 이미지 갤러리, 광고 배너, 콘텐츠 슬라이드 등 다양한 슬라이드 기반 UI를 구현할 때 사용할 수 있습니다.

## 주요 기능

- **height**: 슬라이드의 높이를 설정할 수 있습니다. 기본값은 `300px`입니다.
- **children**: `Slide` 컴포넌트 내에 표시될 내용입니다. 각각의 내용은 `SwiperSlide` 컴포넌트로 감싸져야 합니다.
- **isNavigation**: 이 값을 `true`로 설정하면 슬라이드 양 옆에 내비게이션 버튼(이전/다음)이 표시됩니다.
- **ispagnation**: 이 값을 `true`로 설정하면 슬라이드 하단에 진행 상태를 나타내는 pagination bar가 표시됩니다. `progressbar` 타입으로 설정됩니다.

## 사용 예

```jsx
<Slide height={400} isNavigation={true} ispagnation={true}>
  <div>슬라이드 1</div>
  <div>슬라이드 2</div>
  <div>슬라이드 3</div>
</Slide>
```
 */

const SlideStory = {
  title: "Components/Slide/Slide",
  component: Slide,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    isNavigation: {
      control: "boolean",
      description: "네비게이션 버튼 활성화 여부",
    },
  },
};

export default SlideStory;

export const Default = (args) => (
  <Slide {...args}>
    <Wrap>Slide 1</Wrap>
    <Wrap>Slide 2</Wrap>
    <Wrap>Slide 3</Wrap>
  </Slide>
);

Default.args = {
  isNavigation: true,
};

export const Pagination = (args) => (
  <Slide {...args}>
    <Wrap>Slide 1</Wrap>
    <Wrap>Slide 2</Wrap>
    <Wrap>Slide 3</Wrap>
  </Slide>
);

Pagination.args = {
  isNavigation: true,
  ispagnation: true,
};

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
`;
