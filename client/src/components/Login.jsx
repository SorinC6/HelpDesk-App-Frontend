import React, { useState } from "react";
import { Input, Button, Message } from "semantic-ui-react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import bg from "../assets/login.jpg";
import Flip from "react-reveal/Flip";
import theme from "../theme/styledTheme";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const isFormEmpty = () => {
    debugger;
    if (username.length === 0 || password.length === 0) {
      return true;
    } else {
      return false;
    }
  };

  const formValid = () => {
    debugger;
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
      setError("");
      console.log("Yess");
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
            <Button color="purple" size="small" style={{ width: 150 }}>
              Login
            </Button>
            <Message>
              Don't have an account? <Link to="/register">Register</Link>
            </Message>
          </Form>
        </RegisterCard>
      </Flip>
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
