import React from 'react'
import styled from 'styled-components'
const AdminHeader = () => {
  return (
    <div>
      <Container>
        <Main>
          <Logo>Logo </Logo>
          <NavBars>
            
          </NavBars>
        </Main>
      </Container>
    </div>
  )
}

export default AdminHeader

const Container = styled.div`
height: 80px;
width: 100%;
background-color: black;
color: white;
display: flex;
justify-content: center;
align-items: center;
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