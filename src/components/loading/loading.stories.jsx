import React from "react";
import styled from "styled-components";

import Loading from "./index";

/**

`Loading` 컴포넌트는 페이지나 컴포넌트의 로딩 상태를 시각적으로 표현하기 위해 사용됩니다. 
<br />
이 컴포넌트는 특정 이미지(`img`)를 로딩 아이콘으로 사용하며, `/assets/images/etc/` 디렉토리 내에 위치한 SVG 파일을 참조합니다. 사용자 정의 로딩 이미지를 지정할 수 있어, 다양한 상황에 맞는 로딩 화면을 구성할 수 있습니다.

## 주요 속성

- **img**: 로딩 이미지 파일의 이름입니다. 이 이름에 해당하는 SVG 파일이 로딩 아이콘으로 표시됩니다.

## 사용 예

```jsx
<Loading img="spinner" />
```
 */

const LoadingStory = {
  title: "Components/Loading/Loading",
  component: Loading,

  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    img: {
      control: "text",
      description: "svg name 입니다.",
      defaultValue: { summary: undefined },
      type: { summary: "string", required: true },
    },
  },
};

export default LoadingStory;

export const pill = {
  args: {
    img: "pill",
  },
};

export const rotate = {
  args: {
    img: "rotate",
  },
};

export const spinner = {
  args: {
    img: "spinner",
  },
};

export const pulse = {
  args: {
    img: "pulse",
  },
};
