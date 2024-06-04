import React from 'react'
import styled from 'styled-components'
import Button from '../../components/button/DefaultButton'
import Icon from '../../components/Icon/index'


const login = () => {
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
        <Button
          type="submit"
          variant="kakao"
          size="md"
          disabled={false}
          onClick={() => console.log('Clicked')}
        >
          카카오톡으로 로그인
        </Button>

        <Button
          type="submit"
          variant="naver"
          size="md"
          disabled={false}
          onClick={() => console.log('Clicked')}
        >
          네이버로 로그인
        </Button>

        <Button
          type="submit"
          variant="google"
          size="md"
          disabled={false}
          onClick={() => console.log('Clicked')}
        >
          구글로 로그인
        </Button>

      </ContentBottom>




    </Wrap>
  )
}

export default login

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

    display: flex;
    flex-direction: column;
    gap: 12px 0;

  

  
`


