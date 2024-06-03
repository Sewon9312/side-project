import GlobalStyle from './GlobalStyle'
import styled from 'styled-components'
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Routers from './Routers'


function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Container>
        <Routers />
        <Footer />
      </Container>
    </>

  );
}

export default App;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 60px;
`;

