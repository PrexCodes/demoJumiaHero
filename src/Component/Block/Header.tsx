import React from 'react'
import styled from 'styled-components'
const Header = () => {
  return (
    <div>
      <Container>
        <Main>
          <Logo>Logo </Logo>
          <NavBars>
            <Nav>Product</Nav>
            <Nav>About</Nav>
            <Nav>Contact</Nav>
          </NavBars>
        </Main>
      </Container>
    </div>
  )
}

export default Header

const Container = styled.div`
height: 80px;
width: 100%;
background-color: #00008bb3;
color: white;
display: flex;
justify-content: center;
align-items: center;
box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
`
const Main = styled.div`
width: 90%;
display: flex;

justify-content: space-between;
align-items: center;
`
const Logo = styled.div`
font-size: 20px;
`
const Nav = styled.div`
margin: 0 15px;
`
const NavBars = styled.div`
display: flex;

`