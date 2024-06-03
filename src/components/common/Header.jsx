import React from 'react'
import styled from 'styled-components'

const Header = () => {
  return (
    <Wrap>Header</Wrap>
  )
}

export default Header


const Wrap = styled.header`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  z-index: 1000;
  height: 60px;
  background-color: gray;
`