import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 30%;
  height: 50%;
  padding: 20px;
  border-radius: 4px;
  background-color: rgb(2, 73, 95, 1);
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  color: white;
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0px;
  padding: 10px;
  border: none;
  border-radius: 4px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  border-radius: 5px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  display: flex;
  justify-content: end;
  align-items: center;
  cursor: pointer;
  color: white;
  transition: all 5s ease;

  &:hover {
    text-decoration: underline;
  }
`;

const Login = () => {
  return (
    <Container className="gradient__bg">
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input placeholder="username" />
          <Input placeholder="password" />

          <Button>LOGIN IN</Button>
          <Link>DO NOT REMEMBER YOUR PASSWORD?</Link>
          <Link>CREATE A NEW ACCOUNT.</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
