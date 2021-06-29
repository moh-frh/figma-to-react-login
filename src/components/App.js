import React from "react";
import styled from "styled-components";
import bgImg from "../assets/bg.png";

const App = () => {
  return (
    <Container>
      <Wraper>app</Wraper>
    </Container>
  );
};

const Container = styled.div`
  background: #eefcff;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;
const Wraper = styled.div`
  background-image: url(${bgImg});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
`;

export default App;
