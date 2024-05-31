import Table from ".";

/**
`Table` 컴포넌트는 데이터를 구조화된 형태로 표시하는 데 사용됩니다.
<br />
사용자 정의 가능한 스크롤 옵션(`scroll`)을 제공하여, 테이블이 수평 또는 수직으로 스크롤되어야 하는 경우에 대응할 수 있습니다. 이 컴포넌트는 데이터 표시, 대량의 정보를 정리하여 보여주기, 사용자 입력 양식과 같은 다양한 시나리오에 활용될 수 있습니다.

## 주요 속성

- **scroll**: `'x'`, `'y'` 값을 받아 해당 방향으로 스크롤 가능한 테이블을 생성합니다. 기본값은 스크롤 없음입니다.
- **children**: `Table` 컴포넌트 내부에 표시될 내용입니다. `<thead>`, `<tbody>`, `<tfoot>` 등의 테이블 관련 요소를 포함할 수 있습니다.

## 사용 예

```jsx
<Table scroll="x">
  <thead>
    <tr>
      <th>헤더1</th>
      <th>헤더2</th>
      <th>헤더3</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>데이터1</td>
      <td>데이터2</td>
      <td>데이터3</td>
    </tr>
    </tbody>
    </Table>
    ```
 **/

const TableStory = {
  title: "Components/Table/Table",
  component: Table,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    scroll: {
      control: "select",
      options: ["x", "y", undefined],
      description: "table 스크롤 방향 입니다.",
      defaultValue: { summary: undefined },
      type: { summary: "string", required: false },
    },
  },
};

export default TableStory;

export const Default = (args) => {
  return (
    <Table {...args}>
      <caption>O2UX 퍼블리싱 프로젝트 환경</caption>
      <colgroup>
        <col style={{ width: "20%" }} />
        <col />
      </colgroup>
      <thead>
        <tr>
          <th scope="col">제목</th>
          <th scope="col">내용</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">항목</th>
          <td>내용</td>
        </tr>
        <tr>
          <th scope="row">항목</th>
          <td>내용</td>
        </tr>
        <tr>
          <th scope="row">항목</th>
          <td>내용</td>
        </tr>
      </tbody>
    </Table>
  );
};
Default.args = {};

export const ScrollX = (args) => {
  return (
    <div style={{ width: "700px" }}>
      <Table {...args}>
        <caption>O2UX 퍼블리싱 프로젝트 환경</caption>
        <colgroup>
          <col style={{ width: "150px" }} />
          <col style={{ width: "400px" }} />
          <col style={{ width: "400px" }} />
        </colgroup>
        <thead>
          <tr>
            <th scope="col">제목</th>
            <th scope="col">제목</th>
            <th scope="col">제목</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">항목</th>
            <td>내용</td>
            <td>내용</td>
          </tr>
          <tr>
            <th scope="row">항목</th>
            <td>내용</td>
            <td>내용</td>
          </tr>
          <tr>
            <th scope="row">항목</th>
            <td>내용</td>
            <td>내용</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};
ScrollX.args = {
  scroll: "x",
};
export const ScrollY = (args) => {
  return (
    <div style={{ height: "150px" }}>
      <Table {...args}>
        <caption>O2UX 퍼블리싱 프로젝트 환경</caption>
        <colgroup>
          <col style={{ width: "20%" }} />
          <col />
        </colgroup>
        <thead>
          <tr>
            <th scope="col">제목</th>
            <th scope="col">내용</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">항목</th>
            <td>내용</td>
          </tr>
          <tr>
            <th scope="row">항목</th>
            <td>내용</td>
          </tr>
          <tr>
            <th scope="row">항목</th>
            <td>내용</td>
          </tr>
          <tr>
            <th scope="row">항목</th>
            <td>내용</td>
          </tr>
          <tr>
            <th scope="row">항목</th>
            <td>내용</td>
          </tr>
          <tr>
            <th scope="row">항목</th>
            <td>내용</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};
ScrollY.args = {
  scroll: "y",
};
