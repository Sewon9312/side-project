import GlobalStyle from './GlobalStyle'
import styled from 'styled-components'
import Routers from './Routers'


function App() {

  return (
    <>
      <GlobalStyle />
      <Container>
        <Routers />
      </Container>
    </>

  );
}

export default App;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

