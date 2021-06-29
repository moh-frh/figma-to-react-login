import React from "react";
import styled from "styled-components";
import logo from "../assets/Rectangle 3.svg";
import Input from "../components/Input";

const Sidebar = () => {
  return (
    <Container>
      <LogoWraper>
        <img src={logo} alt="logo" />
        <div>
          Eli <span>Codes</span>
        </div>
      </LogoWraper>

      <Form>
        <h3>Sign up</h3>

        <Input value="Eli Codes" placeholder="" />
        <Input value="" placeholder="Email" type="email" />
        <Input value="" placeholder="Password" type="password" />
        <Input value="" placeholder="Confrim Password" type="password" />

        <button>Sign Up</button>
      </Form>

      <Terms>
        By signing up, I agree to the Privacy Policy and Terms of Service
      </Terms>

      <div>
        Already have an account? <span>Sign In</span>
      </div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 40%;
  background: rgba(255, 255, 255, 0.87);
  backdrop-filter: blur(48px);
  div {
    font-size: 15px;
    line-height: 18px;
    color: #808080;
  }
  span {
    color: #ff8d8d;
  }
`;
const LogoWraper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 125px;
  }
  div {
    color: #ff8d8d;
    font-weight: bold;
  }
  span {
    color: #70edb9;
    font-weight: normal;
  }
`;

const Form = styled.div`
  button {
    background: #70edb9;
    box-shadow: 0px 14px 31px -23px rgba(0, 0, 0, 0.25);
    border-radius: 11px;
    width: 300px;
    height: 40px;
    border: none;
    color: #ffffff;
  }
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Terms = styled.p`
  padding: 0 1rem;
  width: 300px;
  text-align: center;
  color: #808080;
  font-weight: 300;
  font-size: 15px;
  line-height: 18px;
`;
export default Sidebar;
