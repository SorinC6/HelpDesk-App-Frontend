import React, { useState } from "react";
import { Input, Button, Message } from "semantic-ui-react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import bg from "../assets/login.jpg";
import Flip from "react-reveal/Flip";
import theme from "../theme/styledTheme";

const Login = ({ loginUser, history }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const isFormEmpty = () => {
    if (username.length === 0 || password.length === 0) {
      return true;
    } else {
      return false;
    }
  };

  const formValid = () => {
    if (isFormEmpty()) {
      setError("Please fill all the fields");
    } else {
      setError(null);
      return true;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (formValid()) {
      setError(null);
      loginUser({ username, password }).then(status => {
        debugger;
        if (status === 200) {
          history.push("/");
        }
      });
    }
  };

  return (
    <RegisterScreen>
      <Flip left>
        <RegisterCard>
          {/* <Icon name="registered" size="huge" bordered style={{ margin: 10 }} /> */}
          <Form onSubmit={handleSubmit}>
            <h1>HelpDesk Login</h1>
            <InputWrapper
              icon="users"
              iconPosition="left"
              placeholder="username"
              onChange={e => setUsername(e.target.value)}
            />
            <InputWrapper
              icon="lock"
              iconPosition="left"
              placeholder="pasword"
              type="password"
              onChange={e => setPassword(e.target.value)}
            />
            <Button
              color="purple"
              size="small"
              style={{ width: 150 }}
              type="submit"
            >
              Login
            </Button>
            {error && (
              <Message error>
                <div>
                  <p>{error}</p>
                </div>
              </Message>
            )}
            <Message>
              Don't have an account? <Link to="/register">Register</Link>
            </Message>
          </Form>
        </RegisterCard>
      </Flip>
      <Content>
        <p>
          As a student I want to log in and have the ability to see tickets that
          are currently open for help. As a student I want to be able to create
          a new help ticket with a title, description, what I've tried and a
          category (i.e. React).{" "}
        </p>
        <p>
          As a helper I want to be able to login and see a list of open tickets.
          As a helper I want to be able to assign a ticket to myself by clicking
          a "help student" button. As a helper I want to be able to mark the
          ticket as "resolved", or re-assign the ticket back to the queue if I
          cannot resolve the ticket.
        </p>
      </Content>
    </RegisterScreen>
  );
};

export default Login;

const RegisterScreen = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  justify-content: center;
  align-items: center;
  background-image: url(${bg});
  background-repeat: no-repeat;
  background-size: cover;

  @media (max-width: 1000px) {
    flex-direction: column;
    height: 100%;
  }
`;

const RegisterCard = styled.div`
  height: 500px;
  width: 500px;
  border: 10px solid ${theme.color.accentPurple};
  border-radius: 50%;
  background: ${theme.color.accentPurple};
  opacity: 0.9;
  box-shadow: ${theme.shadow.cardShadow};
`;
const Form = styled.form`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const InputWrapper = styled(Input)`
  width: 300px;
  margin: 20px;
`;

const Content = styled.div`
  padding: 20px 40px;
  position: absolute;
  right: 5%;
  bottom: 7%;
  width: 300px;
  text-align: justify;
  text-shadow: ${theme.shadow.buttonShadow};
  color: ${theme.color.textColor};
  letter-spacing: 1px;
  line-height: 1.4;

  @media (max-width: 1000px) {
    position: relative;
    max-width: 500px;
    margin: 10px auto;
    background-color: ${theme.color.lightPurple};
    opacity: 0.7;
  }
`;
