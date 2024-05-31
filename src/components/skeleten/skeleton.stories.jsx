import React from 'react'
import styled from 'styled-components'

import Skeleton from '.'

/**
 * `Skeleton` 컴포넌트는 데이터 로딩 과정에서 사용자에게 로딩 상태를 시각적으로 표시하기 위한 UI 요소입니다. 페이지나 컴포넌트가 로딩 중일 때 플레이스홀더로 사용되며, 사용자에게 콘텐츠가 곧 나타날 것임을 알립니다. `Skeleton`은 콘텐츠의 형태를 모방한 빛나는 효과를 가진 직사각형입니다.

## 주요 속성

- **className**: 스타일링을 위한 CSS 클래스 이름을 추가할 수 있습니다.
- **style**: 인라인 스타일을 통해 컴포넌트의 스타일을 직접 지정할 수 있습니다.

## 사용 예

```jsx
<Skeleton className="my-skeleton" style={{ width: '100px', height: '20px' }} />
```
 */


const SkeletonStory = {
  title: 'Components/skeleten/skeleton',
  component: Skeleton,
  // decorators: [
  //   (Story) => (
  //     <div style={{ width: '375px', height: '675px' }}>
  //       <Story />
  //     </div>
  //   ),
  // ],
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    img: {
      control: 'text',
      description: 'svg name 입니다.',
      defaultValue: { summary: undefined },
      type: { summary: 'string', required: true },
    },
  },
}

export default SkeletonStory;

export const Default = () => (
  <SkeletonWrapper>
    <Skeleton style={{ width: '70%', height: '20px' }} />
    <Skeleton style={{ width: '90%', height: '20px', marginTop: '10px' }} />
    <Skeleton style={{ width: '60%', height: '20px', marginTop: '10px' }} />
  </SkeletonWrapper>
);

const SkeletonWrapper = styled.div`
  width: 200px; // 또는 원하는 너비로 설정
  display: flex;
  flex-direction: column;
`;