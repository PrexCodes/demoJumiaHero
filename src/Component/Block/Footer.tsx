import React from "react";

import styled from "styled-components";

const Footer = () => {
  return (
    <div>
        <Container>
            © Jumia Nigeria Plc 
        </Container>
    </div>
  );
};

export default Footer;

const Container = styled.div`
background-color: darkgray;
height: 40px;
color: white;
display: flex;
justify-content: center;
align-items: center;
`




