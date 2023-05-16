import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
import styled from "styled-components";

const UserLayout = () => {
  return (
    <Container>
      <Header />
      <Main>
        <Outlet />
      </Main>

      <Footer/>
    </Container>
  );
};

export default UserLayout;
const Main = styled.div`
  flex: 1;
  
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  
`;

