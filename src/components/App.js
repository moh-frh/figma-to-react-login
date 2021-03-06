import React from "react";
import styled from "styled-components";
import bgImg from "../assets/bg.png";
import Sidebar from '../components/Sidebar'
import Main from '../components/Main'

const App = () => {
  return (
    <Container>
      <Wraper>
        <Sidebar/>
        <Main/>
      </Wraper>
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
  display: flex;
`;

export default App;
