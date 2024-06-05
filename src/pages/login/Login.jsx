import React from 'react'
import styled from 'styled-components'
import Button from '../../components/button/DefaultButton'
import Icon from '../../components/Icon/index'
import { useNavigate } from 'react-router-dom'



const Login = () => {

  const navigate = useNavigate();

  const OnSubmit = (e) => {
    e.preventDefault();

    navigate('/home')

  }



  return (
    <Wrap>

      <ContentTop>
        <Icon
          icon="Main-icon"
          width={96}
          height={96}
        />

        <div className='main-text'>
          우리동네 펫
        </div>

      </ContentTop>

      <ContentBottom>
        <Form onSubmit={OnSubmit}>
          <Button
            type="submit"
            variant="kakao"
            size="md"
            disabled={false}
            onClick={OnSubmit}
          >
            카카오톡으로 로그인
          </Button>

          <Button
            type="submit"
            variant="naver"
            size="md"
            disabled={false}
            onClick={OnSubmit}
          >
            네이버로 로그인
          </Button>

          <Button
            type="submit"
            variant="google"
            size="md"
            disabled={false}
            onClick={OnSubmit}
          >
            구글로 로그인
          </Button>
        </Form>


      </ContentBottom>




    </Wrap>
  )
}

export default Login

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 12px 0;
`

const Wrap = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    align-items: center;
    padding: 0 24px;
    justify-content: center;
    gap: 150px 0;

`

const ContentTop = styled.div`
display: flex;
    flex-direction: column;
    align-items: center;

.main-text{
  margin-top: 24px;
  font-weight: 600;
  font-size: 24px;
  line-height: 28px;
  color: #636363;
}
  
`
const ContentBottom = styled.div`
width: 100%;

${Form}

  

  
`


